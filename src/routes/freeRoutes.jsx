import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/main";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import { ToastContainer } from "react-toastify";
import User from "../pages/user/User";
import Posts from "../pages/posts/Posts";
import PrivatesRoutes from "./RoutesPrivates";
import SignUpFormation from "../pages/signupToFormation/SignUpFormation";
import Formations from "../pages/formations/Formations"

const RoutesFree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<PrivatesRoutes />}>
          <Route path="/user/:name" element={<User />} />
          <Route path="/sign-up/:name" element={<SignUpFormation />} />
        </Route>

        <Route path="/posts" element={<Posts />} />
        <Route path="/formations" element={<Formations />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default RoutesFree;
