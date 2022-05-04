import React from "react";
import { useEffect } from "react";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import FormSend from "./Formsend";

const hasDone = () => {
  const user = localStorage.getItem("done");
  
  if (user == "true") {
    return true;
  } else {
    return false;
  }
};
const NavigateToHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", {
      replace: true,
      state: "sorry",
      //   state: formData,
    });
  });
};
const ProtectedRoutes = (props) => {
  const done = hasDone();

  return done ? <FormSend /> : NavigateToHomePage();
};

export default ProtectedRoutes;
