import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(800);
  useEffect(() => {
    const handleResize = () => setScreenSize(window?.innerWidth);
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("load", handleResize)
    };
  }, []);
  return screenSize;
}

export default useScreenSize;
