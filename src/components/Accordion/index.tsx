import React, { useState, useRef } from "react";
import "./style.scss";

interface PropsAccordion {
  title: string;
  content: string;
}

export default function Accordion(props: PropsAccordion) {

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(document.createElement("div"));

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );

  }
  return (
    <div className="accordion_section">
      <button className={`accordion__title ${setActive}`} onClick={toggleAccordion}>
        <h3 className="text-dark-green mb-2 txt-accordion">{props.title}</h3>
        <span className="material-icons">
          {setActive === "active" ? "remove_circle_outline" : "add_circle_outline"}
        </span>
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div
          className="accordion__text mb-5 text-lightGray"
          dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  );
}
