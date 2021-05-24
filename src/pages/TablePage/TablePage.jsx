import React, { memo } from 'react';
import { shape } from 'prop-types';
import queryString from 'query-string';

import './style.scss';

import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';

const visualElements = [
  {
    id: 1,
    name: 'Text',
    text: 'Text',
  },
  {
    id: 2,
    name: 'Button',
    text: 'Button',
  },
  {
    id: 3,
    name: 'Image',
    text: 'Picture',
  },
  {
    id: 4,
    name: 'Video',
    text: 'videooo',
  },
];

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
      <Sidebar visualElements={visualElements} />
      <Table col={colCount} row={rowCount} visualElements={visualElements} />
    </div>
  );
};

TablePage.propTypes = {
  location: shape({}).isRequired,
};

export default memo(TablePage);
