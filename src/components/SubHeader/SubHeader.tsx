import "./SubHeader.scss";
import Category from "../Category/Category";
import { useQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { _GetCategorys } from "../../gql/query/getCategorys";
import { Key } from "react";
export const SubHeader = ({
  queryRef,
  onInputChange,
  func,
  categoryRef,
  onCategoryChange,
}) => {
  const { data, loading } = useQuery(_GetCategorys, {
    variables: {
      input: {
        usr_id: Cookies.get("lambda_usr_id"),
        usr_token: Cookies.get("lambda_usr_token"),
      },
    },
  });
  if (loading) {
    return "loading";
  }

  return (
    <div className="subHeader">
      <form action="" className="search" method="GET">
        <input
          type="text"
          name=""
          id="search"
          ref={queryRef}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <button
          className="submit"
          type="button"
          onClick={() =>
            func({
              variables: {
                input: {
                  byCategory: "7e12a7bd-bac4-48c1-b47a-425d485452eb",
                  filter: queryRef.current,
                  orderByName: "asc",
                },
              },
            })
          }
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <ul>
        {data.GET_CATEGORYS.map(
          (cat) => (
            <Category
              categoryName={cat.name}
              categoryId={cat.id}
              onCategoryChange={onCategoryChange}
              categoryRef={categoryRef}
              key={cat.name}
            />
          )
        )}
      </ul>
    </div>
  );
};
