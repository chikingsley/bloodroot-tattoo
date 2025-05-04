import { Link } from 'react-router-dom'; // Changed from next/link
import { Navigation } from '@/components/layout/Navigation';
import BloodrootLogo from '@/components/logo/bloodroot-logo'; // Adjusted path
import { useHeaderVisibility } from '@/hooks/useHeaderVisibility'; // Updated import path

export function Header() {
  const { isHeaderVisible } = useHeaderVisibility(); // Get state from context

  // The IntersectionObserver logic is commented out or removed.
  // Header is always visible for now.

  return (
    <header 
      className={`
        sticky top-0 z-50 w-full 
        backdrop-blur-lg bg-zinc-900/80 border-b border-zinc-800/50 backdrop-saturate-150 
        transition-opacity duration-300 ease-in-out 
        ${isHeaderVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} // Use context state
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex h-16 md:h-20 items-center py-4">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2"> {/* Changed href to to */}
            <BloodrootLogo fillColor="white" width={180} height={40} /> {/* Adjusted size */} 
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Navigation />
        </div>
      </div>
    </header>
  );
} 