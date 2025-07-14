"use client";
import { useState, useEffect, useRef } from 'react';

interface ProgressRingProps {
  percentage: number;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ percentage }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const currentRef = ringRef.current; 
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

  const circleDasharray = `${(progress / 100) * 283.5} 283.5`;

  return (
    <div ref={ringRef} className="flex justify-center items-center">
      <svg className="transform w-full h-full" viewBox="0 0 100 100">
        <circle
          className="stroke-gray-200 stroke-9"
          cx="50"
          cy="50"
          r="45"
          fill="none"
        />
        <circle
          className="stroke-primary-500 stroke-9 transition-all duration-400"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeDasharray={circleDasharray}
          strokeLinecap="round"
          transform="rotate(0 50 50)"
        />
        <text x="50" y="50" textAnchor="middle" dy="0.3em" className="fill-gray-800 text-xl font-sans">
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
};

export default ProgressRing;