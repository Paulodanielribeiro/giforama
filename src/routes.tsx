import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import PhotoView from "./pages/GifView";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/view",
    element: <PhotoView />,
  },
];
