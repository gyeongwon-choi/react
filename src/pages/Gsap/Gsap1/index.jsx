import "./gsap1.css";
import { gsap, useGSAP } from "@/libs/gsapSetup";

export default function Gsap1() {
  useGSAP(
    () => {
      gsap.to("#section1 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
      });

      gsap.to("#section2 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
        scrollTrigger: {
          trigger: "#section2 .parallax__item__img",
        },
      });

      gsap.to("#section3 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
        scrollTrigger: {
          trigger: "#section3 .parallax__item__img",
          toggleActions: "play none reverse none",
        },
      });

      gsap.to("#section4 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
        scrollTrigger: {
          trigger: "#section4 .parallax__item__img",
          start: "top 50%",
          end: "bottom 30%",
          toggleActions: "play none reverse none",
          markers: false,
        },
      });

      gsap.to("#section5 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
        scrollTrigger: {
          trigger: "#section5 .parallax__item__img",
          start: "top 50%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      });

      gsap.to("#section6 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
        scrollTrigger: {
          trigger: "#section6 .parallax__item__img",
          start: "top 50%",
          end: "bottom 200px",
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      gsap.to("#section7 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
        scrollTrigger: {
          trigger: "#section7 .parallax__item__img",
          start: "top center",
          end: "bottom 20%",
          scrub: true,
          toggleClass: "active",
          markers: false,
          id: "box7",
        },
      });

      gsap.to("#section8 .parallax__item__img", {
        duration: 2,
        x: 500,
        borderRadius: 100,
        rotation: 360,
        scrollTrigger: {
          trigger: "#section8 .parallax__item__img",
          start: "top center",
          end: "bottom 20%",
          scrub: true,
          markers: true,
          // onEnter: () => {console.log("onEnter")},
          // onLeave: () => {console.log("onLeave")},
          // onEnterBack: () => {console.log("onEnterBack")},
          // onLeaveBack: () => {console.log("onLeaveBack")},
          onUpdate: (self) => {
            console.log("onUpdate", self.progress.toFixed(3));
          },
          onToggle: (self) => {
            console.log("onToggle", self.isActive);
          },
        },
      });
    }
    /* { scope: container } */
  );

  return (
    <main id="parallax__cont1">
      <section id="section1" className="parallax__item">
        <span className="parallax__item__num">01</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section2" className="parallax__item">
        <span className="parallax__item__num">02</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section3" className="parallax__item">
        <span className="parallax__item__num">03</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section4" className="parallax__item">
        <span className="parallax__item__num">04</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section5" className="parallax__item">
        <span className="parallax__item__num">05</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section6" className="parallax__item">
        <span className="parallax__item__num">06</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section7" className="parallax__item">
        <span className="parallax__item__num">07</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section8" className="parallax__item">
        <span className="parallax__item__num">08</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section9" className="parallax__item">
        <span className="parallax__item__num">09</span>
        <div className="parallax__item__img"></div>
      </section>
    </main>
  );
}
