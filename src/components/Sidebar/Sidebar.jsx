/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useState } from 'react';

import './style.scss';

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

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('text/plain', `${e.target.attributes.text.nodeValue}`);
  }

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
              <ul
                className="sub-nav"
              >
                {visualElements && visualElements.map(
                  (item) => (
                    <li
                      className="draggable"
                      id={item.id}
                      text={item.text}
                      draggable
                      key={item.id}
                      onDragStart={dragStart}
                    >
                      {item.name}
                    </li>
                  ),
                )}
              </ul>
            )}
          </ul>
        </nav>
      </aside>
    </section>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default memo(Sidebar);
