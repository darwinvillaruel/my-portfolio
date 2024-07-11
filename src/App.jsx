import IroncladLinear from "./components/Case Study/IroncladLinear.jsx";
import LandingPage from "./route/LandingPage";
import Projects from "./route/Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/projects/ironclad-linear",
      element: <IroncladLinear />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
