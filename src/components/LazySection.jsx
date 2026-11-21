import { Suspense, useEffect, useRef, useState } from "react";

export default function LazySection({ id, children, minHeight = "320px" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      style={!isVisible ? { minHeight } : undefined}
    >
      <Suspense
        fallback={
          isVisible ? (
            <div className="section-loading" style={{ minHeight }} aria-hidden="true" />
          ) : null
        }
      >
        {isVisible ? children : null}
      </Suspense>
    </div>
  );
}