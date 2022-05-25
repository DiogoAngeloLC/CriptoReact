import React from "react";
import "./style.scss";

interface PropsLanguage {
  language?: string;
  className?: string;
  img: any;
}

const SearchLanguage = (props: PropsLanguage) => {
  return (
    <div className="linguagemHeader alinhar mr-4-5">
          <img src={props.img} alt="" />
          <select className="text-lightGray" name="linguagem" id="linguagem">
            <option value="portugues" selected >Português</option>
            <option value="inglês">Inglês</option>
            <option value="japones">Japones</option>   
          </select>
        </div>
  );
}
export default SearchLanguage
