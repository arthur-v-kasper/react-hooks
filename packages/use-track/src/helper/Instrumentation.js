import { useEffect, useState } from "react";
import { AnalyticsBrowser } from "@segment/analytics-next";

const useTrack = () => {
  const [analytics, setAnalytics] = useState();
  const [writeKey, setWriteKey] = useState("2qexT5tmXGmTbVw0Rs75hLnPueW7GEB6");

  useEffect(() => {
    const loadAnalytics = async () => {
      let [response] = await AnalyticsBrowser.load({ writeKey });
      setAnalytics(response);
    };
    loadAnalytics();
  }, [writeKey]);

  return analytics?.track;
};

export default useTrack;
