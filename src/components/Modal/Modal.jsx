import React, { memo } from 'react';
import { func } from 'prop-types';

import './style.scss';

const Modal = ({
  onClose,
}) => {
  const onSubmit = () => {};

  return (
    <div className="modal">
      <div className="outer">
        <div className="close">
          <button
            type="button"
            className="closeButton"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <div className="inner">
          <p>Set table parameters</p>
          <form className="form" action="/table">
            <label htmlFor="colCount">
              Column
              <input
                type="number"
                min="1"
                max="20"
                name="colCount"
                className="input"
              />
            </label>

            <label htmlFor="rowCount">
              Row
              <input
                type="number"
                name="rowCount"
                min="1"
                max="20"
                className="input"
              />
            </label>
            <button
              type="submit"
              className="button"
              onClick={onSubmit}
            >
              Generate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: func.isRequired,
};

export default memo(Modal);
