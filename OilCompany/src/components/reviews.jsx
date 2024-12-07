import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ReviewApi from './ReviewApi';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await ReviewApi.getReviews();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const StarRating = ({ rating }) => {
    const totalStars = 5; // Total number of stars

    const filledStars = Math.round(rating); // Number of filled stars based on rating

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-green-500" />);
      }
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 lg:relative lg:top-16 bg-green-100 rounded-3xl">
      <h2 className="text-3xl font-bold mb-12 text-center text-green-800 ">Customer Reviews</h2>
      <div className="overflow-x-auto" style={{ '-ms-overflow-style': 'none', scrollbarWidth: 'none' }}>
        <div className="flex space-x-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6 flex-shrink-0 w-80">
              <h3 className="text-xl font-bold mb-4 ">{review.shopName}</h3>
              <StarRating rating={review.rating} />
              <p className="text-green-700 mt-2">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
