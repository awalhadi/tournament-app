'use client';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Wheel } from '../lib/wheel';

/** items: [{id,label}]. angleRef keeps the rotation across re-renders. */
const WheelCanvas = forwardRef(function WheelCanvas({ items, angleRef }, ref) {
  const cv = useRef(null);
  const wheel = useRef(null);
  const key = items.map((i) => i.id).join('|');

  useEffect(() => {
    wheel.current = new Wheel(cv.current, items, angleRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useImperativeHandle(ref, () => ({
    async spin(fast = false) {
      const w = wheel.current;
      const idx = await w.spin(fast);
      angleRef.current = w.angle;
      return idx;
    },
    items: () => wheel.current?.items || [],
  }));

  return (
    <div className="wheel-box">
      <div className="pointer" />
      <canvas ref={cv} />
    </div>
  );
});

export default WheelCanvas;
