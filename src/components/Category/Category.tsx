import React from "react";
import "./Category.scss";

function Category({ category }) {
  return <button className="categoryBtn">{category}</button>;
}

export default Category;
