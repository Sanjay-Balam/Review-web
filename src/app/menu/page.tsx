import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Dessert Menu</h1>
        
        <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl p-8 shadow-md mb-16">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-10">
              <h2 className="text-5xl font-serif text-[#663300] mb-2">WHY SO CREAMY?</h2>
              <p className="text-lg text-[#8B4513] italic">Indulge in our handcrafted delights</p>
            </div>
            
            {/* Milk Cakes Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-[#663300] border-b-2 border-[#663300] pb-2 mb-8">MILK CAKES</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/assets/images/milk-cake.jpeg" 
                      alt="Milk Cake" 
                      width={500} 
                      height={500} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Milk Malai</span>
                    <span className="text-xl font-bold">99/-</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Oreo</span>
                    <span className="text-xl font-bold">99/-</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Biscoff</span>
                    <span className="text-xl font-bold">99/-</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Dairy milk</span>
                    <span className="text-xl font-bold">99/-</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Ras malai</span>
                    <span className="text-xl font-bold">99/-</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cheese Cakes Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-[#663300] border-b-2 border-[#663300] pb-2 mb-8">CHEESE CAKES</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-xl font-medium">Flavor</span>
                    <div className="flex">
                      <span className="text-lg font-semibold text-[#8B4513] w-20 text-center">Small</span>
                      <span className="text-lg font-semibold text-[#8B4513] w-20 text-center">Large</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Lotus biscoff</span>
                    <div className="flex">
                      <span className="text-xl font-bold w-20 text-center">79/-</span>
                      <span className="text-xl font-bold w-20 text-center">139/-</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Oreo</span>
                    <div className="flex">
                      <span className="text-xl font-bold w-20 text-center">79/-</span>
                      <span className="text-xl font-bold w-20 text-center">139/-</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-xl font-medium">Blueberry</span>
                    <div className="flex">
                      <span className="text-xl font-bold w-20 text-center">79/-</span>
                      <span className="text-xl font-bold w-20 text-center">139/-</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-lg h-[500px] w-[500px]">
                    <Image 
                      src="/assets/images/Cheese-cake.jpeg" 
                      alt="Cheese Cake" 
                      height={300} 
                      width={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chocolate Brownie Section */}
            <div>
              <h2 className="text-4xl font-bold text-[#663300] border-b-2 border-[#663300] pb-2 mb-8">CHOCOLATE BROWNIE</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/assets/images/new-chocolate-brownie.jpeg" 
                      alt="Chocolate Brownie" 
                      width={500} 
                      height={500} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-2xl font-medium">Chocolate Brownie</span>
                    <span className="text-2xl font-bold">149/-</span>
                  </div>
                  <p className="text-lg text-[#8B4513] mt-4">
                    Rich and fudgy chocolate goodness topped with a scoop of vanilla ice cream. 
                    The perfect dessert for chocolate lovers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 