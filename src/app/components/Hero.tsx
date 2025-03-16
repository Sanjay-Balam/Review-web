import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-[var(--background-color)] overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--secondary-color)]">
              Delicious Desserts, <br />
              <span className="text-[var(--primary-color)]">Honest Reviews</span>
            </h1>
            <p className="text-lg mb-6 text-[var(--text-color)]">
              Discover our handcrafted desserts and share your sweet experiences. 
              Every treat tells a story, and we&apos;d love to hear yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="btn-primary text-center">
                Explore Our Menu
              </Link>
              <Link 
                href="/reviews" 
                className="px-6 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-md hover:bg-[var(--primary-color)] hover:text-white transition-colors text-center"
              >
                Read Reviews
              </Link>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className="w-full h-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-4 h-4 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[var(--light-text)]">
                  <span className="font-semibold">4.9</span> from over 200 reviews
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/desserts/Boston-Chocolate.jpeg"
                alt="Delicious Red Velvet Cake"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-[var(--primary-color)] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Handcrafted</p>
                  <p className="text-xs text-[var(--light-text)]">with love</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-[var(--secondary-color)] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Fresh Daily</p>
                  <p className="text-xs text-[var(--light-text)]">baked goods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
} 