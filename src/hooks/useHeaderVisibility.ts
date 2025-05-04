import { useContext } from 'react';
import { HeaderVisibilityContext } from '../context/definitions'; // Updated path

export const useHeaderVisibility = () => {
  const context = useContext(HeaderVisibilityContext);
  if (context === undefined) {
    throw new Error('useHeaderVisibility must be used within a HeaderVisibilityProvider');
  }
  return context;
}; 