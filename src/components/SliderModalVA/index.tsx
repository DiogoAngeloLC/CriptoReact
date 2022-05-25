import React, { Children } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation,useHistory } from "react-router-dom";
import { isPropertySignature } from 'typescript';
import "./style.scss";

interface IProps {
  className?: string;
  opened?: boolean;
  onCLose?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  subTitle?: string
}

const DrawerVA: React.FC<IProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let location = useLocation();
  const openedProfile = useSelector((state: any) => state.menu.openedProfile);
  const getOut = () => {
    history.push("/")
    changeMenu()
  }

  const changeMenu = () => {
    dispatch({ type: "MENU_TOGGLE_PROFILE" });
  }

  return (
    <>
      {
        <div className={`container-modal ${props.className} ${props.opened ? "active" : ""}`}>
          <div onClick={() => changeMenu()} className="before"></div>
          <div className="drawer-containerVA">
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

export default DrawerVA
