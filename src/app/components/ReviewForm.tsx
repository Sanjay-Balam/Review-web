'use client';

import { useState } from 'react';
import { StarIcon } from './Icons';

interface ReviewFormProps {
  onSubmit: (review: {
    name?: string;
    email?: string;
    rating: number;
    dessert?: string;
    comment?: string;
  }) => Promise<void>;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [dessert, setDessert] = useState('');
  const [comment, setComment] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validation - only rating is required
    if (!rating) {
      setError('Please provide a rating');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit({
        name,
        email,
        rating,
        dessert,
        comment
      });
      
      // Reset form
      setName('');
      setEmail('');
      setRating(0);
      setDessert('');
      setComment('');
      setSuccess('Thank you for your review!');
    } catch (err) {
      setError('Failed to submit review. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const dessertOptions = [
    'All Desserts',
    'Milk Malai Milk Cake',
    'Biscoff Milk Cake',
    'Oreo Cheesecake',
    'Blue Berry Cheesecake',
    'Rasmalai Milk Cake',
    'Chocolate Brownie',
    'Biscoff Cheesecake'
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
      
      {success && (
        <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4">
          {success}
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <p className="text-sm text-gray-500 mb-4">
        Only rating is required. All other fields are optional.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Rating <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-1 focus:outline-none"
                aria-label={`Rate ${star} stars`}
              >
                <StarIcon 
                  filled={star <= (hoveredRating || rating)} 
                  className={star <= (hoveredRating || rating) ? "text-yellow-400" : "text-gray-300"} 
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-[var(--light-text)]">
              {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Select a rating'}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="dessert" className="block text-sm font-medium mb-1">
            Dessert <span className="text-gray-400">(optional)</span>
          </label>
          <select
            id="dessert"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
          >
            <option value="">Select a dessert</option>
            {dessertOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium mb-1">
            Your Review <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
            placeholder="Share your experience with us..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"></div>
              Submitting...
            </>
          ) : (
            'Submit Review'
          )}
        </button>
      </form>
    </div>
  );
} 