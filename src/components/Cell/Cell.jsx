import React, { memo, useState, useEffect } from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

const Cell = ({
  visualElements,
}) => {
  const Item = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
 border: 1px solid grey;
 `;
  const [id, setId] = useState(null);
  const [text, setText] = useState('');
  function dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    const dragId = event.dataTransfer.getData('text/plain');
    setId(dragId);
  }

  useEffect(() => {
    const currentText = visualElements.filter((elem) => elem.id === Number(id));
    setText(currentText.length > 0 ? currentText[0].text : '');
  }, [id]);

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

Cell.propTypes = {
  visualElements: arrayOf(shape({})).isRequired,
};

export default memo(Cell);
