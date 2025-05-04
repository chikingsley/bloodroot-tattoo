import { createContext } from 'react';

// Type for the context value
export interface HeaderVisibilityContextProps {
  isHeaderVisible: boolean;
  setIsHeaderVisible: (isVisible: boolean) => void;
}

// Create and export the context
export const HeaderVisibilityContext = createContext<HeaderVisibilityContextProps | undefined>(undefined); 