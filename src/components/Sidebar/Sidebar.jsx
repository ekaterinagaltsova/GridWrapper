/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useState } from 'react';
// import { Draggable } from 'react-beautiful-dnd';

import './style.scss';

import Item from '../Item';

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
    text: 'Image',
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section className="menu">
      <aside className="sidebar">
        <header>
          Menu
        </header>
        <nav className="nav">
          <ul>
            <li
              onClick={handleClick}
              onKeyDown={handleClick}
            >
              Visual Elements
            </li>
            {open && (
              <ul className="sub-nav">
                {visualElements && visualElements.map(
                  (item) => (
                    <Item element={item} key={item.id} />
                  ),
                )}
              </ul>
            )}
            {/* {open && (
              <ul className="sub-nav">
                {visualElements && visualElements.map(
                  (item, index) => (
                    <Draggable key={item.id} draggableId="characters" index={index}>
                      {(provided) => {
                        <div
                          innerRef={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.name}
                        </div>;
                      }}
                    </Draggable>
                  ),
                )}
              </ul>
            )} */}
          </ul>
        </nav>
      </aside>
    </section>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default memo(Sidebar);
