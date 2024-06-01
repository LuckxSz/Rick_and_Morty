import { useState } from 'react';
import rnm from '../../assets/rnm.png';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-16 flex items-center justify-between px-4 shadow-lg rounded-b-lg">
      <div className="flex items-center space-x-2">
        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          src={rnm}
          alt="Rick and Morty logo"
          onClick={toggleModal}
        />
        <h1 className="text-lg font-semibold text-white">Rick and Morty API</h1>
      </div>
      {openModal && (
        <div className="absolute top-full right-0 transform translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Modal Title</h2>
          <p className="text-gray-700 mb-4">Here are some information:</p>
          <ul className="text-gray-700 mb-4">
            <li>Contact: example@example.com</li>
            <li>Settings: Lorem ipsum dolor sit amet.</li>
          </ul>
          <button
            onClick={toggleModal}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
