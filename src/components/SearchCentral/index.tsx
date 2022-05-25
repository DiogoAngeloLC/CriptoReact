import React from "react";
import "./style.scss";

interface PropsSearch {
    className?: string;
  }

const SearchCentral = (props: PropsSearch) => {
  return (
        <div className={`searchHeader ${props.className}`}>
        <span className="material-icons iconSearch mr-2">search</span>
        <input className="widthsearch" type="search" placeholder="Pesquisar na Central de Ajuda" name="" id="" />
      </div>
  );
};
export default SearchCentral;
