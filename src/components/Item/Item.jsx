import React, { memo, useEffect } from 'react';
import { string } from 'prop-types';

import './style.scss';

const Item = ({
  element,
}) => {
  useEffect(() => {
    const draggableElements = document.getElementById('draggable');
    draggableElements.draggable = true;
    function dragStart(event) {
      event.dataTransfer.setData('text', event.target.id); // or "text/plain"
      console.log('event -->', event);
    }
    draggableElements.addEventListener('dragstart', dragStart);

    function findDroppable(event) {
      draggableElements.hidden = true;
      const elem = document.elementFromPoint(event.clientX, event.clientY);
      console.log('findDroppable elem-->', elem);
      draggableElements.hidden = false;

      if (elem == null) {
        return null;
      }

      return elem.closest('.droppable');
    }

    draggableElements.addEventListener('dragstart', (evt) => {
      evt.target.classList.add('selected');
    });

    draggableElements.addEventListener('dragend', findDroppable);

    draggableElements.addEventListener('dragover', (evt) => {
      evt.preventDefault();
    });

    draggableElements.onmousedown = (event) => {
      function moveAt(e) {
        draggableElements.style.left = `${e.pageX - draggableElements.offsetWidth / 2}px`;
        draggableElements.style.top = `${e.pageY - draggableElements.offsetHeight / 2}px`;
      }
      draggableElements.style.position = 'absolute';
      moveAt(event);
      document.body.appendChild(draggableElements);
      draggableElements.style.zIndex = 1000;

      document.onmousemove = (e) => {
        moveAt(e);
      };

      draggableElements.onmouseup = () => {
        document.onmousemove = null;
        draggableElements.onmouseup = null;
        findDroppable(event);
      };
    };
  }, []);

  return (
    <div
      id="draggable"
    >
      {element.name}
    </div>
  );
};

Item.propTypes = {
  element: string.isRequired,
};

Item.defaultProps = {};

export default memo(Item);
