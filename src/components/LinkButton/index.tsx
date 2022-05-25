import React from "react";
import { Link } from "react-router-dom";

interface PropsLink {
  id?: string;
  className?: string;
  children?: any;
  to: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: any;
}

export default function LinkButton(props: PropsLink) {
  return (
        <Link
          id={props.id}
          className={`btn ${props.className}`}
          to={props.to}
          style={props.style}>
          {props.children}
        </Link>
  );
}
