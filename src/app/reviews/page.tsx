'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  dessert: string;
  avatar?: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const url = filter 
        ? `/api/reviews?dessert=${encodeURIComponent(filter)}` 
        : '/api/reviews';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      
      const data = await response.json();
      setReviews(data);
      setError('');
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Failed to load reviews. Please try again later.');
      
      // Fallback to sample data for demo purposes if no reviews exist yet
      if (reviews.length === 0) {
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
            comment: 'The Boston Cream was fantastic! The custard filling was smooth and the chocolate topping was perfect.',
            dessert: 'Boston Cream',
            avatar: '/avatars/avatar-2.jpg'
          },
          {
            id: '3',
            name: 'Emily Rodriguez',
            date: 'June 2, 2023',
            rating: 5,
            comment: 'Red Velvet cake is my absolute favorite, and this one did not disappoint! The cream cheese frosting was perfect.',
            dessert: 'Red Velvet',
            avatar: '/avatars/avatar-3.jpg'
          },
          {
            id: '4',
            name: 'David Wilson',
            date: 'May 5, 2023',
            rating: 5,
            comment: 'The Dulce de Leche cake was incredible! The caramel flavor was rich without being too sweet.',
            dessert: 'Dulce de Leche',
            avatar: '/avatars/avatar-4.jpg'
          },
          {
            id: '5',
            name: 'Jessica Brown',
            date: 'June 10, 2023',
            rating: 4,
            comment: 'The Assorted Treats platter was perfect for our office party. Everyone found something they loved!',
            dessert: 'Assorted Treats'
          }
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [filter]);

  const handleSubmitReview = async (reviewData: any) => {
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
      
      // Refresh the reviews list
      fetchReviews();
      return Promise.resolve();
    } catch (err) {
      console.error('Error submitting review:', err);
      return Promise.reject(err);
    }
  };

  const dessertOptions = [
    'All Desserts',
    'Chocolate Cake',
    'Boston Cream',
    'Red Velvet',
    'Dulce de Leche',
    'Assorted Treats',
    'Vanilla Cupcake',
    'Apple Pie',
    'Tiramisu',
    'Cinnamon Roll'
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-[var(--background-color)]">
        <div className="bg-[var(--secondary-color)] text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h1>
            <p className="max-w-2xl mx-auto">
              We value your feedback! Read what others are saying about our desserts or share your own experience.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <label htmlFor="filter" className="block text-sm font-medium mb-2">
                Filter by Dessert
              </label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
              >
                <option value="">All Desserts</option>
                {dessertOptions.slice(1).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--primary-color)] border-r-transparent"></div>
                <p className="mt-2 text-[var(--light-text)]">Loading reviews...</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                    {error}
                  </div>
                )}
                
                {reviews.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-[var(--light-text)]">
                      No reviews found for this dessert. Be the first to leave a review!
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                )}
              </>
            )}
            
            <div className="max-w-2xl mx-auto mt-12">
              <ReviewForm onSubmit={handleSubmitReview} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 