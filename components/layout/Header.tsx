import Link from 'next/link';
import { Navigation } from './Navigation';
import BloodrootLogo from '@/components/logo/bloodroot-logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/50 backdrop-saturate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex h-16 md:h-20 items-center py-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BloodrootLogo fillColor="white" width={200} height={200}/>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Navigation />
        </div>
      </div>
    </header>
  );
} 