import React from "react";
import { Route } from "react-router-dom";

function PublicLayout({
  component: Component,
  path,
  exact,
  ...rest
}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return (
          <>
            <Component {...props} />
          </>
        )
      }}
      {...rest}
    />
  );
};

export default PublicLayout;