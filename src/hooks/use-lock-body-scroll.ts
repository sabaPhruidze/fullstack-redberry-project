import { useEffect } from "react";

export const useLockBodyScroll = (isLocked: boolean) => {
  useEffect(() => {
    if (typeof document === "undefined" || !isLocked) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
};
