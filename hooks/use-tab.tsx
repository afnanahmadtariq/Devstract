import * as React from "react"

const TAB_BREAKPOINT_MIN = 768;
const TAB_BREAKPOINT_MAX = 1024;

export function useIsTab() {
  const [isTab, setIsTab] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(`(min-width: ${TAB_BREAKPOINT_MIN}px) and (max-width: ${TAB_BREAKPOINT_MAX}px)`);
      const onChange = () => {
        setIsTab(window.innerWidth >= TAB_BREAKPOINT_MIN && window.innerWidth <= TAB_BREAKPOINT_MAX);
      };
      mql.addEventListener("change", onChange);
      setIsTab(window.innerWidth >= TAB_BREAKPOINT_MIN && window.innerWidth <= TAB_BREAKPOINT_MAX);
      return () => mql.removeEventListener("change", onChange);
    }
    return undefined;
  }, []);

  return !!isTab;
}
