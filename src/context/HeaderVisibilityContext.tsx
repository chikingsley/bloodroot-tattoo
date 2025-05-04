import React, { createContext, useState, useContext, ReactNode } from 'react';

interface HeaderVisibilityContextProps {
  isHeaderVisible: boolean;
  setIsHeaderVisible: (isVisible: boolean) => void;
}

const HeaderVisibilityContext = createContext<HeaderVisibilityContextProps | undefined>(undefined);

export const HeaderVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false); // Default: Header is hidden

  return (
    <HeaderVisibilityContext.Provider value={{ isHeaderVisible, setIsHeaderVisible }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
};

export const useHeaderVisibility = () => {
  const context = useContext(HeaderVisibilityContext);
  if (context === undefined) {
    throw new Error('useHeaderVisibility must be used within a HeaderVisibilityProvider');
  }
  return context;
}; 