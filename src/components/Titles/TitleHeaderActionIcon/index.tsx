import React, {useState} from "react";
import "./style.scss";
import BRL from "../../../assets/img/icon-BRL.svg";
import Tree from "../../../assets/img/icon-tree.svg";
import Cloud from "../../../assets/img/icon-cloud.svg";


interface PropsTitleHeader {
    title: string;
  }

const TitleHeaderActionIcon = (props: PropsTitleHeader) => {
    const [visibility, setVisibility] = useState(true);

    return(
        <div className="TitleHeader">
            <h5>{props.title}</h5>
        </div>
    );
  }
  export default TitleHeaderActionIcon
  