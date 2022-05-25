import React from "react";
import "./style.scss"
import bannerAnuncio from "../../../assets/img/banner-anuncio.jpg"

interface ContentCard {
    className?: string;
    children?: any;
    backgroundImage?: any;
  }

const CardAnuncio = (props: ContentCard) => {
  return (
    <div  className="card-anuncio"
    style={{backgroundImage: `url(${bannerAnuncio})`}}>
    
      {props.children}
    </div>
  );
};
export default CardAnuncio;