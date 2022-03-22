import { useEffect, useState } from "react";
import { AnalyticsBrowser } from "@segment/analytics-next";

const writeKey = "2qexT5tmXGmTbVw0Rs75hLnPueW7GEB6";

const handleSegment = () => {
  const loadAnalytics = async () => {
    let [response] = await AnalyticsBrowser.load({ writeKey });
    setAnalytics(response);
  };
  loadAnalytics();
};

export const useTrack = () => {
  const [analytics, setAnalytics] = useState();

  useEffect(() => {
    handleSegment();
  }, [writeKey]);

  return analytics?.track;
};

//export default useTrack;
