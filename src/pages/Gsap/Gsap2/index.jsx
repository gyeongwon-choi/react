import "./gsap2.css";
import { gsap, useGSAP, ScrollTrigger } from "@/libs/gsapSetup";

export default function Gsap2() {
  useGSAP(
    () => {
      const ani1 = gsap.timeline();
      ani1.to("#section1 .parallax__item__img", {rotation: 720, scale: 0, borderRadius: 200})
          .to("#section1 .parallax__item__img", {rotation: 0, scale: 1, borderRadius: 20});
      ScrollTrigger.create({
        animation: ani1,
        trigger: "#section1",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      });

      const ani2 = gsap.timeline();
      ani2.from("#section2 .i1", {y: -100, autoAlpha: 0, borderRadius: 200})
          .from("#section2 .i2", {y: 100, autoAlpha:0, borderRadius: 200})
          .from("#section2 .i3", {y: -100, autoAlpha:0, borderRadius: 200});
      ScrollTrigger.create({
        animation: ani2,
        trigger: "#section2",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      });

      const ani3 = gsap.timeline();
      ani3.from("#section3 .parallax__item__img", {
        autoAlpha: 0,
        y: -100,
        ease: "back.out(4)",
        stagger: {
          amount: 3,
          from: "random"
        }
      });
      ScrollTrigger.create({
        animation: ani3,
        trigger: "#section3",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      });

      const ani4 = gsap.timeline();
      ani4.from("#section4 .parallax__item__img", {
        autoAlpha: 0,
        scale: 5,
        width: "100vw",
        height: "100vh"
      });
      ScrollTrigger.create({
        animation: ani4,
        trigger: "#section4",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      });

      const ani5 = gsap.timeline();
      ani5.to("#section5 .t1", {xPercent: 300}, "text")
          .to("#section5 .t2", {xPercent: -300}, "text")
          .to("#section5 .t3", {xPercent: 300}, "text")
          .to("#section5 .t4", {xPercent: -300}, "text");
      ScrollTrigger.create({
        animation: ani5,
        trigger: "#section5",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        snticipatePin: 1,
        markers: false
      });

      const ani6 = gsap.timeline();
      ani6.to("#section6 .parallax__item__text", {scale: 60, duration: 2})
          .to("#section6 .parallax__item__text", {autoAlpha: 0});
      ScrollTrigger.create({
        animation: ani6,
        trigger: "#section6",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      });

      const ani7 = gsap.timeline();
      ani7.from("#section7 .t1", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
          .from("#section7 .t2", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
          .from("#section7 .t3", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
          .from("#section7 .t4", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
          .from("#section7 .t5", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
          .from("#section7 .t6", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
          .from("#section7 .t7", {autoAlpha: 0, duration: 1, y: 50}, "+=1");
      ScrollTrigger.create({
        animation: ani7,
        trigger: "#section7",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      });

      const ani8 = gsap.timeline();
      ani8.from("#section8 .t1", {x: innerWidth * 1})
          .from("#section8 .t2", {x: innerWidth * -1})
          .from("#section8 .t3", {x: innerWidth * 1})
          .from("#section8 .i1", {x: innerWidth * 1, rotation: 360, scale: 5.5});
      ScrollTrigger.create({
        animation: ani8,
        trigger: "#section8",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      });
      
      const ani9 = gsap.timeline();
      ani9.to("#section9 .parallax__item__img", {scale: 13})
          .to("#section9 .parallax__item__img", {autoAlpha: 0});
      ScrollTrigger.create({
        animation: ani9,
        trigger: "#section9",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true
      });

    }
  );

  return (
    <main id="parallax__cont2">
        <section id="section1" class="parallax__item">
            <span class="parallax__item__num">01</span>
            <div class="parallax__item__img"></div>
        </section>

        <section id="section2" class="parallax__item">
            <span class="parallax__item__num">02</span>
            <div class="parallax__item__img i1"></div>
            <div class="parallax__item__img i2"></div>
            <div class="parallax__item__img i3"></div>
        </section>

        <section id="section3" class="parallax__item">
            <span class="parallax__item__num">03</span>
            <div class="parallax__item__img"></div>
            <div class="parallax__item__img"></div>
            <div class="parallax__item__img"></div>
            <div class="parallax__item__img"></div>
            <div class="parallax__item__img"></div>
            <div class="parallax__item__img"></div>
        </section>

        <section id="section4" class="parallax__item">
            <span class="parallax__item__num">04</span>
            <div class="parallax__item__img"></div>
        </section>

        <section id="section5" class="parallax__item">
            <span class="parallax__item__num">05</span>
            <div class="parallax__item__text t1">section5</div>
            <div class="parallax__item__text t2">section5</div>
            <div class="parallax__item__text t3">section5</div>
            <div class="parallax__item__text t4">section5</div>
        </section>

        <section id="section6" class="parallax__item">
            <span class="parallax__item__num">06</span>
            <div class="parallax__item__text">section6</div>
        </section>

        <section id="section7" class="parallax__item">
            <span class="parallax__item__num">07</span>
            <div class="parallax__item__text t1">코딩이란</div>
            <div class="parallax__item__text t2">프로그래밍 코드를</div>
            <div class="parallax__item__text t3">어딘가에</div>
            <div class="parallax__item__text t4">적는 것을 말한다</div>
            <div class="parallax__item__text t5">코딩은</div>
            <div class="parallax__item__text t6">누구나</div>
            <div class="parallax__item__text t7">할 수 있다.</div>
        </section>

        <section id="section8" class="parallax__item">
            <span class="parallax__item__num">08</span>
            <div class="parallax__item__text t1">section8 title1</div>
            <div class="parallax__item__text t2">section8 title2</div>
            <div class="parallax__item__text t3">section8 title3</div>
            <div class="parallax__item__img i1"></div>
        </section>

        <section id="section9" class="parallax__item">
            <span class="parallax__item__num">09</span>
            <div class="parallax__item__img"></div>
        </section>
    </main>
  );
}
