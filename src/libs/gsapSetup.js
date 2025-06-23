import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 모든 주요 플러그인 import
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import Flip from "gsap/Flip";
import SplitText from "gsap/SplitText";
import Observer from "gsap/Observer";
import InertiaPlugin from "gsap/InertiaPlugin";
import EaselPlugin from "gsap/EaselPlugin";
import PixiPlugin from "gsap/PixiPlugin";
import TextPlugin from "gsap/TextPlugin";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import Physics2DPlugin from "gsap/Physics2DPlugin";

// 플러그인 등록
gsap.registerPlugin(
	ScrollTrigger,
	ScrollToPlugin,
	Draggable,
	MotionPathPlugin,
	Flip,
	SplitText,
	Observer,
	InertiaPlugin,
	EaselPlugin,
	PixiPlugin,
	TextPlugin,
	MorphSVGPlugin,
	Physics2DPlugin
);

// 필요한 객체 export
export {
	gsap,
	useGSAP,
	ScrollTrigger,
	ScrollToPlugin,
	Draggable,
	MotionPathPlugin,
	Flip,
	SplitText,
	Observer,
	InertiaPlugin,
	EaselPlugin,
	PixiPlugin,
	TextPlugin,
	MorphSVGPlugin,
	Physics2DPlugin
};