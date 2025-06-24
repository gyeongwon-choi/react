import "./test.css";
import { gsap, useGSAP, ScrollTrigger } from "@/libs/gsapSetup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // Swiper의 기본 스타일
import "swiper/css/navigation"; // 내비게이션 스타일
import "swiper/css/pagination"; // 페이지네이션 스타일 (필요한 경우)

export default function Test() {
  useGSAP(() => {
    const scalingAni = gsap.timeline();
    scalingAni.to(".scaling", { scale: 13 }).to(".scaling", { autoAlpha: 0 });
    ScrollTrigger.create({
      animation: scalingAni,
      trigger: ".scaling",
      start: "50% 50%",
      end: "+=100%",
      scrub: true,
      pin: true,
      markers: false,
      anticipatePin: 1,
    });

    gsap.to(".left", {
      scrollTrigger: {
        trigger: ".left", 
        start: "top top", 
        end: "bottom top", 
        pin: true, 
        scrub: true, 
        markers: true,
      },
    });

    gsap.fromTo(
      ".right div",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1, 
        duration: 2,
        stagger: 0.3, 
        scrollTrigger: {
          trigger: ".right",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      }
    );
  });

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Slide 4
        </SwiperSlide>
        ...
      </Swiper>
      <div
        className="scaling"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ddd",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid #000",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%",
            }}
          >
            texttexttexttexttexttexttexttext
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="left"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yellow",
            flex: "1",
          }}
        >
          왼쪽
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "red",
            flex: "1",
            gap: "150px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "200px",
              backgroundColor: "blue",
            }}
          >
            1
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "200px",
              backgroundColor: "blue",
            }}
          >
            2
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "200px",
              backgroundColor: "blue",
            }}
          >
            3
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "200px",
              backgroundColor: "blue",
            }}
          >
            4
          </div>
        </div>
      </div>
      <div style={{height:"2000px"}}>1</div>
    </>
  );
}
