import { useState } from 'react';
import rnm from '../../assets/rnm.png';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="bg-white text-black h-16 flex items-center justify-between px-4 shadow-lg rounded-b-lg">
      <div className="flex items-center space-x-2">
        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          src={rnm}
          alt="Rick and Morty logo"
          onClick={toggleModal}
        />
        <h1 className="text-lg font-semibold ">Rick and Morty API</h1>
      </div>


    </div>
  );
};
