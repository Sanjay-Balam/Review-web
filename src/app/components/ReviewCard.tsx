import { StarIcon } from './Icons';
import Image from 'next/image';

interface ReviewCardProps {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  dessert?: string;
  avatar?: string;
}

export default function ReviewCard({ id, name, date, rating, comment, dessert, avatar }: ReviewCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[var(--primary-color)] flex-shrink-0">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name}'s avatar`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white font-semibold text-lg">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-[var(--text-color)]">{name}</h3>
              <p className="text-sm text-[var(--light-text)]">{date}</p>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i} 
                  filled={i < rating} 
                  className={i < rating ? "text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
          </div>
          
          {dessert && (
            <p className="mt-1 text-sm font-medium text-[var(--secondary-color)]">
              Dessert: {dessert}
            </p>
          )}
          
          <p className="mt-3 text-[var(--text-color)]">{comment}</p>
        </div>
      </div>
    </div>
  );
} 