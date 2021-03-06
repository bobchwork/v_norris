import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Common/Button';

const proptypes = {
  categoryList: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

const CategoryFilter = (props) => {
  const { categoryList, handleOnClick } = props;
  const [showCategories, toggleCategories] = useState(false);
  const buttons = categoryList.map((category, index) => {
    const k = `${category}-${index}`;
    const buttonClass = cx({
      'category-filter__category-button': true,
      'category-filter__category-button--show': showCategories,
    });
    const chooseAndClose = (category) => {
      handleOnClick(category);
      toggleCategories(!showCategories);
    };
    return (
      <div className={buttonClass} key={k}>
        <Button
          buttonType={category}
          title={category}
          handleOnClick={() => (chooseAndClose(category))}
          categoryList={categoryList}
        />
      </div>
    );
  });
  buttons.push(
    <div
      className="category-filter__category-button category-filter__category-button--mb"
      key={`all-${buttons.length}`}
    >
      <Button
        buttonType="all"
        title="view all"
        handleOnClick={() => (handleOnClick('all'))}
        iconPath={`${process.env.REACT_APP_BASE_PATH}/images/arrow-d.png`}
      />
    </div>,
  );
  return (
    <div className="category-filter">
      <div className="category-filter__mb-button">
        <Button
          buttonType="all"
          title="Categories"
          handleOnClick={() => toggleCategories(!showCategories)}
          iconPath={`${process.env.REACT_APP_BASE_PATH}/images/arrow-d.png`}
        />
      </div>
      {buttons}
    </div>
  );
};

CategoryFilter.propTypes = proptypes;

export default CategoryFilter;
