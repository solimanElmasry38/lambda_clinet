import React from "react";
import "./SubHeader.scss";
import Category from "../Category/Category";
import { useQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { _GetCategorys } from "../../gql/query/getCategorys";
export const SubHeader = () => {
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
        <input type="text" name="" id="search" />
        <button className="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <ul>
        <li>
          {data.GET_CATEGORYS.map((cat) => (
            <Category category={cat.name} />
          ))}
        </li>
      </ul>
    </div>
  );
};
