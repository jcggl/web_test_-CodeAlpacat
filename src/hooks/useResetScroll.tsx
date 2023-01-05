import { useEffect } from 'react';

const useResetScroll = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
}

export default useResetScroll