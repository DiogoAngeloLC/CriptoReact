import React, { Children } from 'react';
import { isPropertySignature } from 'typescript';
import "./style.scss";

interface IProps {
  className?: string;
  opened?: boolean;
  onCLose?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  subTitle?: string
}

const Drawer: React.FC<IProps> = (props) => {


  return (
    <>
      {
        <div className={`container-modal ${props.className} ${props.opened ? "active" : ""}`}>
          <div className="background-container-modal" />
          <div className="drawer-container">
            <div className="content-modal">
              <span onClick={props.onCLose} className="material-icons arrow-side md-18 icon-mobile color-icon" style={{ cursor: "pointer" }}>arrow_back</span>
              <span className="text-mobile">{props.title}</span>
            </div>
            <div className="container-modal2">
              <div className="title-modal">
                <h3 className="heading-05 uppercase text-light mb-6">{props.title} {props.subTitle}</h3>
              </div>
              {props.children}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Drawer
