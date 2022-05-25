import React from "react";
import { Link } from "react-router-dom";

interface PropsLinkS {
  id?: string;
  className?: string;
  children?: any;
  to: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: any;
}

export default function LinkSpam(props: PropsLinkS) {
  return (
        <Link
          id={props.id}
          to={props.to}
          style={props.style}>
          {props.children}
        </Link>
  );
}
