'use client'

import Link from 'next/link';
import { Navigation } from './Navigation';
import BloodrootLogo from '@/components/logo/bloodroot-logo';
import React, { useState, useEffect, useRef } from 'react';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.getElementById('hero-logo-trigger');

    if (!targetElement) {
      console.warn('Hero logo trigger element (#hero-logo-trigger) not found.');
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const shouldBeVisible = !entry.isIntersecting;
        setIsVisible(prev => {
          if (prev !== shouldBeVisible) {
            return shouldBeVisible;
          }
          return prev;
        });
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    observerRef.current.observe(targetElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <header 
      className={`
        sticky top-0 z-50 w-full 
        backdrop-blur-lg bg-background/80 border-b border-border/50 backdrop-saturate-150 
        transition-opacity duration-300 ease-in-out 
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
    >
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