import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <div>
        <h3 className={css.txt}>Find contacts by name</h3>

        <input
          className={css.input}
          name="filter"
          value={filter}
          type="text"
          onChange={onChangeFilter}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
