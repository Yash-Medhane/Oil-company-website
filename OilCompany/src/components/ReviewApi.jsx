const ReviewApi = {
  getReviews: () => {
    return new Promise((resolve) => {
      const reviews = [
        {
          id: 10,
          shopName: 'Krushna Sweets',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Great quality oils! Fast delivery and excellent customer service.',
        },
        {
          id: 9,
          shopName: 'Ganesh Kirana & General Store',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 5,
          review: 'ASHWA oils are top-notch. The flavors are amazing!',
        },
        {
          id: 8,
          shopName: 'Raja Namkeen',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Very satisfied with the purity of the oils. Highly recommend.',
        },
        {
          id: 7,
          shopName: 'Shree Maharashtra Misal',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 3,
          review: 'Good oils, but packaging could be improved for better protection.',
        },
        {
          id: 6,
          shopName: 'Bhagwati KiranaMart',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 5,
          review: 'Absolutely love ASHWA oils. They make every dish better!',
        },
        {
          id: 5,
          shopName: 'Sinnar Sai Special',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Consistently high-quality oils. Healthier and tastier choices.',
        },
        {
          id: 4,
          shopName: 'Marathi Misal',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Impressed with the variety and nutritional benefits of ASHWA oils.',
        },
        {
          id: 3,
          shopName: 'Maharaja Sweets',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 3,
          review: 'Good oils, but I expected a bit more variety in flavors.',
        },
        {
          id: 2,
          shopName: 'Nashik Misal Corner',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 5,
          review: 'Excellent customer service and high-quality oils. Very pleased!',
        },
        {
          id: 1,
          shopName: 'Swagat Bakery',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Fresh and organic oils. Perfect for cooking and salads.',
        },
      ];

      setTimeout(() => {
        resolve(reviews);
      }, 1000); // Simulate a delay in fetching data
    });
  },
};

export default ReviewApi;
