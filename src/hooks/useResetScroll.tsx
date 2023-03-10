import { resetScrollState } from '@/store/atoms';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

const useResetScroll = () => {
    const setResetScroll = useSetRecoilState(resetScrollState);
    const location = useLocation()
    
    useEffect(() => {
      let timer = setTimeout(() => {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
        });
        setResetScroll(true);
      }, 50);
      return () => clearTimeout(timer);
    }, [setResetScroll, location]);
}

export default useResetScroll