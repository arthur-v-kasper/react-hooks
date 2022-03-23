import { useEffect, useState } from "react";
import { AnalyticsBrowser } from "@segment/analytics-next";

const writeKey = "2qexT5tmXGmTbVw0Rs75hLnPueW7GEB6";

export const useSegment = () => {
  const [analytics, setAnalytics] = useState();

  const handleSegment = () => {
    const loadAnalytics = async () => {
      let [response] = await AnalyticsBrowser.load({ writeKey });
      setAnalytics(response);
    };
    loadAnalytics();
  };

  useEffect(() => {
    handleSegment();
  }, [writeKey]);

  //return analytics?.track;
  return analytics;
};

//export default useTrack;
