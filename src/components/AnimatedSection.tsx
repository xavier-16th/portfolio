// animated section wrapper
// uses intersection observer to trigger animations when stuff scrolls into view
// wrap anything in this and it fades in nicely

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  style = {},
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // watch for when this element enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // only animate once, dont re-trigger on scroll back up
        }
      },
      {
        threshold: 0.1, // fires when at least 10% of the element is visible
        rootMargin: "0px 0px -100px 0px", // offset so it triggers a bit before fully in view
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // map the animation prop names to the actual css class names
  const animationMap = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationMap[animation] : ""} ${className}`}
      style={{
        opacity: isVisible ? undefined : 0, // hidden until the observer triggers, then the css animation takes over
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards", // keeps the final state after animation ends (stays visible)
        ...style,
      }}
    >
      {children}
    </div>
  );
}
