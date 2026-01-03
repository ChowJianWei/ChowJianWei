'use client';
import { useEffect, useRef } from 'react';

export default function MapContainer({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
  }, []);

  return (
    <div className="map-container" ref={containerRef}>
      {children}
    </div>
  );
}
