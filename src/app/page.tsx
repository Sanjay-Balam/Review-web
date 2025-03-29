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
                <h2 className="text-3xl font-bold mb-4">Why so Creeamy? Bakery</h2>
                <p className="text-[var(--light-text)] mb-4">
                  Founded recently, Why so Creeamy? is driven by a passion for creating handcrafted desserts. Our goal is to bring delightful treats to the community, ensuring that every dessert is a masterpiece made from the finest ingredients.
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
                  name: 'Milk Malai Milk Cake',
                  image: '/assets/images/milk-mali-milkcake.jpeg',
                  description: 'A delightful fusion of milk and malai, this cake is rich, moist, and topped with a creamy frosting.',
                  price: '₹99',
                },
                {
                  name: 'Biscoff Milk Cake',
                  image: '/assets/images/Biscoff-cheesecake.jpeg',
                  description: 'A luscious milk cake infused with the unique flavor of Biscoff, layered with creamy frosting and topped with crushed Biscoff cookies.',
                  price: '₹99',
                },
                {
                  name: 'Oreo Cheesecake',
                  image: '/assets/images/Oreo-cheese-cake.jpeg',
                  description: 'A rich and creamy cheesecake infused with crushed Oreo cookies, topped with a decadent layer of Oreo crumbs and garnished with whole Oreo pieces for an irresistible treat.',
                  price: '₹79',
                },
                {
                  name: 'Blue Berry Cheesecake',
                  image: '/desserts/Yummy.jpeg',
                  description: 'A creamy cheesecake infused with fresh blueberries, topped with a luscious blueberry compote and garnished with whole berries for a burst of flavor in every bite.',
                  price: '₹79',
                },
                {
                  name: 'Rasmalai Milk Cake',
                  image: '/assets/images/Rasmalai-milk-cake.jpeg',
                  description: 'A creamy milk cake filled with the soft, tender texture of homemade rasmalai, topped with a luscious cream cheese frosting and garnished with fresh raspberries for a burst of flavor in every bite.',
                  price: '₹99',
                },
                {
                  name: 'Chocolate Brownie',
                  image: '/assets/images/new-chocolate-brownie.jpeg',
                  description: 'A decadent chocolate brownie with a rich, fudgy texture, topped with a layer of creamy frosting and garnished with chocolate shavings for a luxurious finish.',
                  price: '₹149',
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
