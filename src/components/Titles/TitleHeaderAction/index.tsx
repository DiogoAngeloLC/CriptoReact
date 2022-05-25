import React, {useState} from "react";
import "./style.scss";
import BRL from "../../../assets/img/icon-BRL.svg";
import Tree from "../../../assets/img/icon-tree.svg";
import Cloud from "../../../assets/img/icon-cloud.svg";


interface PropsTitleHeader {
    title: string;
  }

const TitleHeaderAction = (props: PropsTitleHeader) => {
    const [visibility, setVisibility] = useState(true);

    return(
        <div className="TitleHeader">
            <h5>{props.title}</h5>
            <div className="IconsHeader">
                <div className="IconsP
                ">
                <img src={Tree} alt="" />
                <p>{ visibility ? "15.00" : "-"}</p>
                </div>
                <div className="IconsP 
                ">
                <img src={Cloud} alt="" />
                <p>{ visibility ? "15.00" : "-"}</p>
                </div>
                <div className="IconsP 
                ">
                <img src={BRL} alt="" />
                <p>{ visibility ? "15.00" : "-"}</p>
                </div>
                <div className="IconsP 
                ">
                <span className="material-icons text-lightGray" onClick={() => setVisibility(!visibility)}>{"visibility"}</span>
                </div>
            
            </div>
        </div>
    );
  }
  export default TitleHeaderAction
  