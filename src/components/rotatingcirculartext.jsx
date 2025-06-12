import React, { useRef, useEffect } from "react";

function RotatingCircularText({ text = "RICHA SURYAWANSHI", radius = 45, speed = 10 }) {
  const ref = useRef();
  const chars = text.split("");
  const degreeStep = 360 / chars.length;

  // Animation for rotation
  useEffect(() => {
    let anim;
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const progress = (ts - start) / 1000; // seconds
      if (ref.current) {
        ref.current.style.transform = `rotate(${(progress * 360) / speed}deg)`;
      }
      anim = requestAnimationFrame(animate);
    }
    anim = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(anim);
  }, [speed]);

  return (
    <div
      ref={ref}
      className="w-full h-full"
      style={{
        position: "relative",
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {chars.map((char, i) => {
        const rotate = i * degreeStep;
        return (
          <span className="text-[#0e12eb]"
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              // Only rotate and translate, do NOT rotate back
              transform: `
                rotate(${rotate}deg)
                translate(${radius}px)
              `,
              transformOrigin: "0 0",
              fontWeight: "bold",
              letterSpacing: "0.06em",
              fontFamily: "monospace",
              fontSize: "0.92rem",
           
              userSelect: "none",
              opacity: 0.85,
              textShadow: "0 1px 8px #000b"
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default RotatingCircularText;