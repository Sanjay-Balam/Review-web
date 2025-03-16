# Sweet Delights Review Website

A modern and visually appealing customer review website for a dessert food business. This website allows customers to browse desserts, read reviews, and leave their own reviews with ratings.

## Features

- **Modern Design**: Minimalistic design with warm, inviting colors that match the dessert theme
- **Customer Reviews**: Customers can read and submit reviews with ratings
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dessert Showcase**: Display of popular desserts with descriptions
- **Review Filtering**: Filter reviews by dessert type

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **File-based Storage**: Reviews are stored in a JSON file (can be replaced with a database)

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sweet-delights-reviews.git
   cd sweet-delights-reviews
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `/app`: Next.js app directory
  - `/components`: Reusable React components
  - `/api`: API routes for handling reviews
- `/public`: Static assets like images
- `/data`: JSON data storage for reviews

## Customization

- **Colors**: Edit the CSS variables in `src/app/globals.css` to change the color scheme
- **Content**: Update the text and images in the components to match your business
- **Desserts**: Modify the dessert options in the components and review form

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images are placeholders and should be replaced with actual dessert photos
- This project was created as a demonstration and can be extended with additional features like user authentication, admin dashboard, etc.
