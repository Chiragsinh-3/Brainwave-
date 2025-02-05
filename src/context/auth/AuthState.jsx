import React, { useContext } from "react";
import AuthContext from "./authContext";

import AlertContext from "../alert/alertContext";
import { useNavigate } from "react-router-dom";

const host = import.meta.env.VITE_HOST;

const AuthState = (props) => {
  const alertContext = useContext(AlertContext);

  const { addAlert } = alertContext;
  const navigate = useNavigate(); // Use useNavigate for navigation

  // login
  const login = async (email, password) => {
    try {
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        addAlert("success", "Success", "Login Sucessfully");
        navigate("/notes");
      } else {
        addAlert("error", "Login failed", error.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      addAlert("error", "Login failed", error.message);
    }
  };

  // signUp || create user
  const signUp = async (name, email, password) => {
    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authToken);
        addAlert("success", "Success", "Login Sucessfully");
        navigate("/notes");
      } else {
        addAlert("error", "Failed", json.error);
      }
    } catch (error) {
      console.log("Error during sign up:", error);
      addAlert("error", "Failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, signUp }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
