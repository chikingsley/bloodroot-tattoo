import { useState, ReactNode } from 'react';
import { HeaderVisibilityContext } from './definitions'; // Import Context only

export const HeaderVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false); // Default: Header is hidden

  return (
    <HeaderVisibilityContext.Provider value={{ isHeaderVisible, setIsHeaderVisible }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}; 