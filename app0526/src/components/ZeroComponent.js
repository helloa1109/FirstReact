import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../text.css';

function Video() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY - 35;

      gsap.to(container, {
        y: y,
      });
      gsap.to('.menu-mask', {
        y: -y,
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <ul className="menu">
        <li>LET'S HAVE</li>
        <li>SOME FUN</li>
        <li>THIS BEAT</li>
        <li>IS SICK</li>
        <li>I WANNA TAKE A RIDE</li>
        <li>ON YOUR DISCO STICK</li>
      </ul>
      <div className="container" ref={containerRef}>
        <ul className="menu-mask">
          <li>LET'S HAVE</li>
          <li>SOME FUN</li>
          <li>THIS BEAT</li>
          <li>IS SICK</li>
          <li>I WANNA TAKE A RIDE</li>
          <li>ON YOUR DISCO STICK</li>
        </ul>
      </div>
    </div>
  );
}

export default Video;
