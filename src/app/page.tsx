import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedReviews from './components/FeaturedReviews';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        <Hero />
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/desserts/Yummy.jpeg"
                  alt="Our Bakery"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4">Sweet Delights Bakery</h2>
                <p className="text-[var(--light-text)] mb-4">
                  Founded in 2010, Sweet Delights has been serving the community with handcrafted desserts made from the finest ingredients. Our passion for baking and attention to detail ensures that every dessert is a masterpiece.
                </p>
                <p className="text-[var(--light-text)] mb-6">
                  We believe that desserts should not only taste amazing but also look beautiful. That&apos;s why our team of skilled pastry chefs put their heart and soul into creating treats that delight both the palate and the eyes.
                </p>
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Desserts */}
        <section className="py-16 bg-[var(--background-color)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Popular Desserts</h2>
              <p className="text-[var(--light-text)] max-w-2xl mx-auto">
                Indulge in our most loved creations. Each dessert is crafted with care using premium ingredients for an unforgettable experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Chocolate Cake',
                  image: '/desserts/Chocolate-Cake.jpeg',
                  description: 'Rich, moist chocolate cake with a velvety ganache frosting.',
                  price: '$6.99',
                },
                {
                  name: 'Boston Cream',
                  image: '/desserts/Boston-Cream.jpeg',
                  description: 'Delicate vanilla cake filled with custard and topped with chocolate glaze.',
                  price: '$7.99',
                },
                {
                  name: 'Red Velvet',
                  image: '/desserts/Red-Velvet.jpeg',
                  description: 'Classic red velvet cake with cream cheese frosting and a hint of cocoa.',
                  price: '$8.49',
                },
                {
                  name: 'Dulce de Leche',
                  image: '/desserts/Dulce.jpeg',
                  description: 'Caramel-infused cake with dulce de leche filling and buttercream.',
                  price: '$8.99',
                },
                {
                  name: 'Assorted Treats',
                  image: '/desserts/Yummy.jpeg',
                  description: 'A selection of our finest mini desserts, perfect for sharing or sampling.',
                  price: '$12.99',
                }
              ].map((dessert, index) => (
                <div key={index} className="card hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src={dessert.image}
                      alt={dessert.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{dessert.name}</h3>
                    <p className="text-[var(--light-text)] mb-4">{dessert.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[var(--secondary-color)]">{dessert.price}</span>
                      <Link 
                        href={`/menu#${dessert.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                href="/menu" 
                className="btn-primary"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Reviews */}
        <FeaturedReviews />
        
        {/* Call to Action */}
        <section className="py-16 bg-[var(--primary-color)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Sweet Experience</h2>
            <p className="max-w-2xl mx-auto mb-8">
              We&apos;d love to hear about your experience with our desserts. Leave a review and let us know what you think!
            </p>
            <Link 
              href="/reviews" 
              className="px-6 py-3 bg-white text-[var(--primary-color)] rounded-md hover:bg-[var(--background-color)] transition-colors font-medium"
            >
              Write a Review
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
