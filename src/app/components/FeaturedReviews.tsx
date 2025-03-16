'use client';

import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import Link from 'next/link';

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  dessert: string;
  avatar?: string;
}

export default function FeaturedReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews?featured=true');
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews. Please try again later.');
        
        // Fallback to sample data for demo purposes
        setReviews([
          {
            id: '1',
            name: 'Sarah Johnson',
            date: 'May 15, 2023',
            rating: 5,
            comment: 'The chocolate cake was absolutely divine! Rich, moist, and the perfect level of sweetness. Will definitely be ordering again!',
            dessert: 'Chocolate Cake',
            avatar: '/avatars/avatar-1.jpg'
          },
          {
            id: '2',
            name: 'Michael Chen',
            date: 'April 28, 2023',
            rating: 4,
            comment: 'Loved the strawberry cheesecake! The texture was perfect and the strawberry topping was fresh and delicious. Just a bit too sweet for my taste.',
            dessert: 'Strawberry Cheesecake',
            avatar: '/avatars/avatar-2.jpg'
          },
          {
            id: '3',
            name: 'Emily Rodriguez',
            date: 'June 2, 2023',
            rating: 5,
            comment: 'The tiramisu is out of this world! Perfect balance of coffee and mascarpone. It transported me straight to Italy!',
            dessert: 'Tiramisu',
            avatar: '/avatars/avatar-3.jpg'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--primary-color)] border-r-transparent"></div>
          <p className="mt-2 text-[var(--light-text)]">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-[var(--light-text)] max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our sweet-toothed customers have to say about our desserts.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6 max-w-2xl mx-auto">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              dessert={review.dessert}
              avatar={review.avatar}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/reviews" 
            className="inline-flex items-center text-[var(--secondary-color)] font-medium hover:text-[var(--primary-color)]"
          >
            View all reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 