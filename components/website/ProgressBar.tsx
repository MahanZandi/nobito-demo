"use client";
import { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = barRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setProgress(Math.min(100, Math.max(0, percentage)));
    }
  }, [isVisible, percentage]);

  return (
    <div ref={barRef} className="w-full">
      <div className="relative w-full h-2 xl:h-[11px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-primary-500 transition-all duration-500 ease-in-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>

      </div>
    </div>
  );
};

export default ProgressBar;