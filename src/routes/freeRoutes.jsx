import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/main";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import { ToastContainer } from "react-toastify";
import User from "../pages/user/User";
import Posts from "../pages/posts/Posts";
import DetailPost from "../pages/detailpost/detailpost";

const RoutesFree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/detail" element={<DetailPost />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default RoutesFree;
