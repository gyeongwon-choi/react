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
import Test from "@/pages/Test";
import StaggeredPhysics from "@/pages/Demo/StaggeredPhysics";

const scrollTriggerRoutes = [
  { path: "gsap1", element: <Gsap1 /> },
  { path: "gsap2", element: <Gsap2 /> },
  { path: "gsap3", element: <Gsap3 /> },
  { path: "gsap4", element: <Gsap4 /> },
  { path: "gsap5", element: <Gsap5 /> },
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
      { path: "test", element: <Test /> },
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
