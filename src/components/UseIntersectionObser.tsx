import { useEffect } from "react";
import { MutableRefObject } from "react";

const useIntersectionObserver = (
  refs: Array<MutableRefObject<HTMLDivElement | null>>,
  threshold = 1,
  removeShowClass = false
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else if (removeShowClass) {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold }
    );

    // Observe each element in refs
    refs.forEach((ref) => {
      if (ref?.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup: Unobserve and disconnect the observer
      refs.forEach((ref) => {
        if (ref?.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, [refs, threshold, removeShowClass]);
};

export default useIntersectionObserver;
