import React, { memo } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import './style.scss';

const Table = ({
  col,
  row,
}) => {
  const Grid = styled('section')`
  display: grid;
  min-width: 800px;
  height: 90vh;
  grid-template-columns: repeat(${col}, 1fr);
  grid-template-rows: repeat(${row}, 1fr);
`;

  const Cell = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
`;

  const cellCount = Number(col) * Number(row);

  // const droppableElements = document.querySelectorAll('.droppable');

  // function dragEnter(event) {
  //   console.log('dragEnter -->', event);

  //   if (event.target.classList && event.target.classList.contains('droppable')
  // && !event.target.classList.contains('dropped')) {
  //     event.target.classList.add('droppable-hover');
  //   }
  // }

  // function dragOver(event) {
  //   console.log('dragOver -->', event);
  //   if (event.target.classList && event.target.classList.contains('droppable')
  // && !event.target.classList.contains('dropped')) {
  //     event.preventDefault();
  //   }
  // }

  // function dragLeave(event) {
  //   console.log('dragLeave -->', event);
  //   if (event.target.classList && event.target.classList.contains('droppable')
  // && !event.target.classList.contains('dropped')) {
  //     event.target.classList.remove('droppable-hover');
  //   }
  // }

  // function drop(event) {
  //   console.log('drop -->', event);
  //   event.preventDefault();
  //   event.target.classList.remove('droppable-hover');
  //   const draggableElementBrand = event.dataTransfer.getData('text');
  //   const droppableElementBrand = event.target.getAttribute('data-brand');
  //   console.log('draggableElementBrand -->', draggableElementBrand);
  //   console.log('droppableElementBrand -->', droppableElementBrand);
  // }

  // droppableElements.forEach((elem) => {
  //   elem.addEventListener('dragenter', dragEnter);
  //   elem.addEventListener('dragover', dragOver);
  //   elem.addEventListener('dragleave', dragLeave);
  //   elem.addEventListener('drop', drop);
  // });

  const getCells = () => {
    const content = [];
    for (let i = 0; i < cellCount; i += 1) {
      content.push(<Cell />);
    }
    return content;
  };

  return (
    <section className="tableWrapper">
      <Grid>
        {/* <DragDropContext>
        <Droppable droppableId="characters">
          {(provided, snapshot) => (
            <Grid
              innerRef={provided.innerRef}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {getCells()}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext> */}
        {getCells()}
      </Grid>
    </section>
  );
};

Table.propTypes = {
  col: string.isRequired,
  row: string.isRequired,
};

export default memo(Table);
