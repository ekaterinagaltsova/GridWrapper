import React, { memo, useState } from 'react';
import styled from 'styled-components';

const Cell = () => {
  const Item = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
 border: 1px solid grey;
 `;

  const [text, setText] = useState('');
  function dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    const dragText = event.dataTransfer.getData('text/plain');
    setText(dragText);
  }

  return (
    <Item
      className="droppable"
      onDrop={drop}
      onDragOver={dragOver}
    >
      {text}
    </Item>
  );
};

Cell.propTypes = {};

export default memo(Cell);
