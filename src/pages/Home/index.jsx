import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/libs/gsapSetup";

export default function Home() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { x: 200, duration: 1 });
  }, []);

  return (
    <div>
      <h2>Home (GSAP)</h2>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          background: "purple",
          marginTop: "2rem",
        }}
      ></div>
    </div>
  );
}
