import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Playground from "./pages/Playground.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Root from "./pages/Root.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import "./index.css";
import ProjectPage from "./pages/ProjectPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Projects />,
        children: [
          {
            path: '/projects/:projectId',
            element: <ProjectPage />
          }
        ]
      },
      {
        path: '/playground',
        element: <Playground />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
