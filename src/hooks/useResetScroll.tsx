import { resetScrollState } from '@/store/atoms';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useResetScroll = () => {
    const setResetScroll = useSetRecoilState(resetScrollState);
    useEffect(() => {
      let timer = setTimeout(() => {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
        });
        setResetScroll(true);
      }, 150);
      return () => clearTimeout(timer);
    }, [setResetScroll]);
}

export default useResetScroll