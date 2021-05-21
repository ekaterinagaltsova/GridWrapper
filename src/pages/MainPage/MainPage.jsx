import React, { memo, useState } from 'react';

import './style.scss';

import Modal from '../../components/Modal';

const MainPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="mainContainer">
      <button
        type="button"
        className="button"
        onClick={handleClick}
      >
        Создать таблицу
      </button>
      {openModal && (
        <Modal
          onClose={handleClose}
        />
      )}

    </div>
  );
};
export default memo(MainPage);
