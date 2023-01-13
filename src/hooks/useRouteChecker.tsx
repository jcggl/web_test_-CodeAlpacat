import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';



const useRouteChecker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (
      process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID &&
      !window.location.href.includes("localhost")
    ) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    }
    setInitialized(true);
  }, [])

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search)
    }    
  },[initialized, location])

}

export default useRouteChecker