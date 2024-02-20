import React from "react";
import "./Category.scss";

function Category({
  categoryName,
  onCategoryChange,
  categoryRef,

  ProductsQueryFunc,
  categoryId,
}) {
  return (
    <li
      className="categoryBtn"
      onClick={() => {
        onCategoryChange(categoryId);

        ProductsQueryFunc({
          variables: {
            input: {
              byCategory: categoryRef.current,
              // filter: queryRef.current,
              orderByName: "asc",
            },
          },
        });
      }}
    >
      {categoryName}
    </li>
  );
}

export default Category;
