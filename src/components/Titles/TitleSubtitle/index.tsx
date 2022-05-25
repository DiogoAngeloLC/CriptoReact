import React from "react";
import "./style.scss";

interface PropsTitle {
  title: string;
  subtitle?: string;
  className?: string;
}

const TitleSubtitle = (props: PropsTitle) => {
  return (
    <div className={`borderLeft ${props.className}`}>
      <h5>{props.title}</h5>
      <p className="text-lightGray">{props.subtitle}</p>
    </div>
  );
}
export default TitleSubtitle
