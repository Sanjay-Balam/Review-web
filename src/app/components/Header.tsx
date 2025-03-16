import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-[var(--secondary-color)] transition-transform hover:scale-105">
            <Image 
              src="/Logo.jpeg" 
              alt="Sweet Delights Logo" 
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 56px"
              priority
            />
          </div>
          <span className="text-xl font-bold text-[var(--secondary-color)] tracking-wide">Sweet Delights</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-[var(--text-color)] hover:text-[var(--secondary-color)] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-[var(--text-color)] hover:text-[var(--secondary-color)] transition-colors">
                Our Menu
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-[var(--text-color)] hover:text-[var(--secondary-color)] transition-colors">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--text-color)] hover:text-[var(--secondary-color)] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 