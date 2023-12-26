import React from 'react';

function useKeydown(key, effect) {
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    function handleKeyDown(event) {
      if (event.key === key) {
        effect();
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, effect])
}

export default useKeydown;
