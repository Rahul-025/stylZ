import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const listner = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback();
    };

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [ref]);
};
