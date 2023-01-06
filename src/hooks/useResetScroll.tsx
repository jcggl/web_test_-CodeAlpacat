import { useEffect } from 'react';

const useResetScroll = () => {
    useEffect(() => {
      let timer = setTimeout(() => {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
        });
      }, 150);
      return () => clearTimeout(timer);
    }, []);
}

export default useResetScroll