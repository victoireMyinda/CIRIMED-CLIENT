import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import App from "./src/App";
import { baseUrl } from "./src/bases/basesurl";

export const ContextApp = createContext();

const AppContext = () => {
  const [userConnected, setUserConnected] = useState(null);
  const [isCoonnected, setIsConnected] = useState(false);
  const [posts, setPosts] = useState(null);

  const value = localStorage.getItem("tokenUser");
  const jwt =
    value && value !== "undefined" && value !== "null" ? JSON.parse(value) : "";
  const decodedToken = decodeToken(jwt);
  const userID = decodedToken && decodedToken.id;

  const getUserById = async (id) => {
    try {
      const { data } = await axios.get(`${baseUrl}/users/${id}`);
      setUserConnected(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/posts`);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    if (isCoonnected === true) {
      getUserById(userID);
    } else if (userID && !isCoonnected) {
      getUserById(userID);
    }
  }, [userID, isCoonnected]);

  return (
    <ContextApp.Provider
      value={{
        userConnected,
        setUserConnected,
        setIsConnected,
        setPosts,
        posts,
      }}
    >
      <App />
    </ContextApp.Provider>
  );
};

export default AppContext;
