import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { useHistory } from "react-router";
import SidebarInt from "../../components/SidebarInt";
import SidebarProfile from "../../components/SidebarProfile";
import MainHeader from "../../components/Header";
import FooterInt from "../../components/FooterInt";

function AuthLayout({ component: Component, path, ...rest }) {
  const userToken = useSelector((state) => state.user.token);
  const history = useHistory();

  if (!userToken) {
    history.push("/");
    localStorage.clear();
  }

  //Aqui vai a regra de validar token existente
  const isAuthenticatedUser = userToken === "123456";
  //END

  return (
    <Route
      path={path}
      render={(props) => {
        if (!isAuthenticatedUser) {
          return (
            <Redirect
              to={{ pathname: "/", state: { from: props.location.pathname } }}
            />
          );
        }

        return (
          <div className="container-sidebar">
            <SidebarInt />
            <SidebarProfile />
            <div className="content-side _interno ">
              <MainHeader name="Felipe Novaes" />
              <Component {...props} />
              <FooterInt />
            </div>
            <SidebarProfile name="Felipe Novaes" />
          </div>
        );
      }}
      {...rest}
    />
  );
}

export default AuthLayout;
