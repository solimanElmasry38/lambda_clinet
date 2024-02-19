import React from "react";
import "./Category.scss";

function Category({ categoryName, onCategoryChange, categoryRef ,categoryId}) {
  return <li className="categoryBtn" onClick={()=>{onCategoryChange(categoryId)}}>{categoryName}</li>;
}

export default Category;
