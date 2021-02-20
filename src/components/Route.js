import { useEffect } from 'react';

const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log('change');
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []); // Only run when component is first rendered to the screen

  return window.location.pathname === path
    ? children
    : null;
};

export default Route;
