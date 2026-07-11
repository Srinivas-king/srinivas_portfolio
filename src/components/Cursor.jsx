import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', onMouseMove);

    const handleHover = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('button') || e.target.closest('a')) {
        gsap.to(cursor, { scale: 2, backgroundColor: 'rgba(139, 92, 246, 0.5)', duration: 0.3 });
        gsap.to(follower, { scale: 1.5, borderColor: 'rgba(139, 92, 246, 0)', duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, backgroundColor: 'white', duration: 0.3 });
        gsap.to(follower, { scale: 1, borderColor: 'rgba(139, 92, 246, 0.5)', duration: 0.3 });
      }
    };

    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-purple-500/50 rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default Cursor;
