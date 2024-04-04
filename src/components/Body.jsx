import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Body;
