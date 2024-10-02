import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useLastVisitedPage = () => {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem("lastVisitedPage", location.pathname);
  }, [location]);
};

export default useLastVisitedPage;
