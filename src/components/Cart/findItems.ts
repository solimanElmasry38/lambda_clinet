import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
import { _GetProduct } from "../../gql/query/getProduct.gql";

export const findItem = (prodId: string) => {
  const { data, loading } = useQuery(_GetProduct, {
    variables: {
      input: {
        id: prodId,
      },
    },
  });
  if (!loading) {
    return data;
  }
};
