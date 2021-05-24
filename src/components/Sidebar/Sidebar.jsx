/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useState } from 'react';
import { arrayOf } from 'prop-types';

import './style.scss';

const Sidebar = ({
  visualElements,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('text/plain', `${e.target.id}`);
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
                      draggable
                      key={item.id}
                      onDragStart={dragStart}
                    >
                      {item.text}
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

Sidebar.propTypes = {
  visualElements: arrayOf.isRequired,
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
