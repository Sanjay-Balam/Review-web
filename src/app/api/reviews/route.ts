import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { Review } from '@prisma/client';

// Get all reviews
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured') === 'true';
    const dessert = searchParams.get('dessert');
    
    // Base query
    let query: any = {
      orderBy: {
        date: 'desc',
      },
    };
    
    // Apply filters if needed
    if (dessert) {
      query.where = {
        ...query.where,
        dessert: {
          equals: dessert,
          mode: 'insensitive', // Case-insensitive search
        },
      };
    }
    
    // Execute the query
    let reviews = await prisma.review.findMany(query);
    
    // For featured reviews, we'll take the top 3 highest rated
    if (featured) {
      reviews = reviews
        .sort((a: Review, b: Review) => b.rating - a.rating)
        .slice(0, 3);
    }
    
    // Format the date for display
    const formattedReviews = reviews.map((review: Review) => ({
      ...review,
      date: review.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    }));
    
    return NextResponse.json(formattedReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

// Create a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate only rating is required
    if (body.rating === undefined || body.rating === null) {
      return NextResponse.json(
        { error: 'Rating is required' },
        { status: 400 }
      );
    }
    
    // Create a new review in the database with optional fields
    const newReview = await prisma.review.create({
      data: {
        name: body.name || '',
        email: body.email || '',
        rating: parseInt(body.rating),
        dessert: body.dessert || '',
        comment: body.comment || '',
        avatar: body.avatar || null,
      },
    });
    
    // Format the date for the response
    const formattedReview = {
      ...newReview,
      date: newReview.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
    
    return NextResponse.json(
      { message: 'Review submitted successfully', review: formattedReview },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}