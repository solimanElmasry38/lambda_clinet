import React from 'react';
import './SubFooter.scss';
import { gql } from '@apollo/client';

import { useQuery } from '@apollo/client';

import { Spinner } from '../Spinner/Spinner';

import { useSearch } from '../../context/searchCtx';
import { useNavigate } from 'react-router-dom';
import { _GetCategorys } from '../../gql/query/getCategorys';

function SubFooter() {
  const { onCategoryChange, SelectedCategory } = useSearch();
  const navigate = useNavigate();
  const categsQuery = useQuery(gql`
    query Query($input: CategsInp) {
      GET_CATEGORYS(input: $input) {
        name
        img
      }
    }
  `,{
    variables:{
      input:{
        takeCount:4
      }
    }
  });
if(categsQuery.loading){
return <Spinner/>
}
if(categsQuery.error){
throw categsQuery.error
}
  const handelClick = (categoryId) => {
    navigate('/search');
    onCategoryChange(categoryId);
    SelectedCategory(categoryId);
  };
  console.log(categsQuery.data)
  return (
    <div className="SubFooter">

{
  categsQuery.data?(
    categsQuery.data.GET_CATEGORYS.map(categ=>(
      <div
      className="CategoryCard"
      onClick={() => {
        handelClick(categ.id);
      }}>
      <img src={categ.img} alt="" />
    </div>
    ))

  ):null

}
     
    </div>
  );
}

export default SubFooter;
