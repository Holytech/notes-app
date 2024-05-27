import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NotesGrid from "./components/NotesGrid";
import NotFound from "./components/NotFound";
import { useState } from "react";
import UserContext from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/notes",
    element: <NotesGrid />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
const App = () => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
