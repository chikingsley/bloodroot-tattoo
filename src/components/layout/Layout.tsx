import React from 'react';
import { Header } from './Header'; // Assuming Header is in the same directory
import { Footer } from './Footer'; // Assuming Footer is in the same directory

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 