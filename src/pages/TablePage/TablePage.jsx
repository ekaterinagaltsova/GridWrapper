import React, { memo } from 'react';
import { shape } from 'prop-types';
import queryString from 'query-string';

import './style.scss';

import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';

const TablePage = ({
  location: {
    search,
  },
}) => {
  const {
    colCount,
    rowCount,
  } = queryString.parse(search);

  return (
    <div className="container">
      <Sidebar />
      <Table col={colCount} row={rowCount} />
    </div>
  );
};

TablePage.propTypes = {
  location: shape({}).isRequired,
};

export default memo(TablePage);
