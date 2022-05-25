import React from "react";
import "./style.scss";

interface PropsSearch {
    className?: string;
  }

const SearchMain = (props: PropsSearch) => {
  return (
        <div className={`searchHeader ${props.className}`}>
        <span className="material-icons iconSearch mr-2">search</span>
        <input type="search" placeholder="Faça a sua busca" name="" id="" />
      </div>
  );
};
export default SearchMain;
