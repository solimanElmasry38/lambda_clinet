import React from 'react';
import './SubFooter.scss';
import { _GetCategory } from '../../gql/query/getCategory';
import { useQuery } from '@apollo/client';

import { Spinner } from '../Spinner/Spinner';

import { useSearch } from '../../context/searchCtx';
import { useNavigate } from 'react-router-dom';

function SubFooter() {
  const { onCategoryChange, SelectedCategory } = useSearch();
  const navigate = useNavigate();
  const HealthCategQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'fashoin'
      }
    }
  });

  const SportCategQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'sport'
      }
    }
  });

  const SmartHomeCategQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'smart home'
      }
    }
  });
  const techCategQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'tech'
      }
    }
  });

  const errors =
    HealthCategQuery.error ||
    SmartHomeCategQuery.error ||
    SportCategQuery.error ||
    techCategQuery.error;
  const Loadings =
    HealthCategQuery.loading ||
    SmartHomeCategQuery.loading ||
    SportCategQuery.loading ||
    techCategQuery.loading;
  if (Loadings) {
    return <Spinner />;
  }

  if (errors) {
    throw errors;
  }
  const handelClick = (categoryId) => {
    navigate('/search');
    onCategoryChange(categoryId);
    SelectedCategory(categoryId);
  };
  return (
    <div className="SubFooter">
      <div
        className="CategoryCard"
        onClick={() => {
          handelClick(HealthCategQuery.data.GET_CATEGORY.id);
        }}
      >
        <img src={HealthCategQuery.data.GET_CATEGORY.img} alt="" />
      </div>
      <div
        className="CategoryCard"
        onClick={() => {
          handelClick(SmartHomeCategQuery.data.GET_CATEGORY.id);
        }}
      >
        <img src={SmartHomeCategQuery.data.GET_CATEGORY.img} alt="" />
      </div>
      <div
        className="CategoryCard"
        onClick={() => {
          handelClick(SportCategQuery.data.GET_CATEGORY.id);
        }}
      >
        <img src={SportCategQuery.data.GET_CATEGORY.img} alt="" />
      </div>
      <div
        className="CategoryCard"
        onClick={() => {
          handelClick(techCategQuery.data.GET_CATEGORY.id);
        }}
      >
        <img src={techCategQuery.data.GET_CATEGORY.img} alt="" />
      </div>
    </div>
  );
}

export default SubFooter;
