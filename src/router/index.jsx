import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Counter from "../pages/Counter";
import Game from "../pages/Game";
import Gsap1 from "@/pages/Gsap/Gsap1";
import Gsap2 from "@/pages/Gsap/Gsap2";
import Gsap3 from "@/pages/Gsap/Gsap3";
import Gsap4 from "@/pages/Gsap/Gsap4";
import Gsap5 from "@/pages/Gsap/Gsap5";
/* import Gsap6 from "@/pages/Gsap/Gsap6";
import Gsap7 from "@/pages/Gsap/Gsap7";
import Gsap8 from "@/pages/Gsap/Gsap8";
import Gsap9 from "@/pages/Gsap/Gsap9";
import Gsap10 from "@/pages/Gsap/Gsap10";
import Gsap11 from "@/pages/Gsap/Gsap11";
import Gsap12 from "@/pages/Gsap/Gsap12";
import Gsap13 from "@/pages/Gsap/Gsap13";
import Gsap14 from "@/pages/Gsap/Gsap14";
import Gsap15 from "@/pages/Gsap/Gsap15"; */
import StaggeredPhysics from "@/pages/Demo/StaggeredPhysics";

const scrollTriggerRoutes = [
  { path: "gsap1", element: <Gsap1 /> },
  { path: "gsap2", element: <Gsap2 /> },
  { path: "gsap3", element: <Gsap3 /> },
  { path: "gsap4", element: <Gsap4 /> },
  { path: "gsap5", element: <Gsap5 /> },
  /* { path: "gsap6", element: <Gsap6 /> },
  { path: "gsap7", element: <Gsap7 /> },
  { path: "gsap8", element: <Gsap8 /> },
  { path: "gsap9", element: <Gsap9 /> },
  { path: "gsap10", element: <Gsap10 /> },
  { path: "gsap11", element: <Gsap11 /> },
  { path: "gsap12", element: <Gsap12 /> },
  { path: "gsap13", element: <Gsap13 /> },
  { path: "gsap14", element: <Gsap14 /> },
  { path: "gsap15", element: <Gsap15 /> }, */
];

const demoRoutes = [
  { path: "staggeredPhysics", element: <StaggeredPhysics /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "todos", element: <Todos /> },
      { path: "counter", element: <Counter /> },
      { path: "game", element: <Game /> },
      ...scrollTriggerRoutes.map((route) => ({
        path: `gsap/${route.path}`,
        element: route.element,
      })),
      ...demoRoutes.map((route) => ({
        path: `demo/${route.path}`,
        element: route.element,
      })),
    ],
  },
]);

export default router;
