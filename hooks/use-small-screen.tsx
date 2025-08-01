import { useEffect, useState } from "react";

/**
 * Returns true if the window width is less than 640px (Tailwind's sm breakpoint).
 */
export function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth < 640);
    }
    window.addEventListener("resize", handleResize);
    // Set on mount in case of hydration mismatch
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
}
