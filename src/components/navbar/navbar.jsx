import React, { useState } from "react";
import Logo from "./navbar-logos/logo";
import Like from "./navbar-logos/like-icon";
import Search from "./navbar-logos/serach-icon";
import StartIcon from "./navbar-logos/start-icon";
import Korzinkaicon from "./navbar-logos/korzinka-icon";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className=" mx-auto p-4 flex items-center justify-between bg-white">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 gap-24">
          <div className="w-[91px] h-[35px] ]">
            <Logo />
          </div>

          <button
            className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-md flex items-center "
            onClick={toggleModal}
          >
            <StartIcon />
            <span className="p-1">KATALOG</span>
          </button>
        </div>
        <div className="flex items-center border border-solid border-gray-300 rounded-[10px]">
          <input
            type="text"
            placeholder="Maxsulotlarni izlash"
            className="flex-grow mx-4 px-4 py-2 rounded-l-full focus:outline-none"
          />
          <button className="bg-blue-600 px-4 py-2 rounded-r-[10px]">
            <Search />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-[10px]">
            <Like />
          </div>
          <div className="bg-blue-100 p-3 rounded-[10px]">
            <Korzinkaicon onClick={toggleModal} />
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg max-w-md">
                <h2 className="text-2xl font-bold mb-4">Korzinka</h2>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={toggleModal}
                >
                  Yopish
                </button>
              </div>
            </div>
          )}
          <button className="bg-gradient-to-r from-purple-300 to-pink-300 text-gray-700 px-4 py-2 rounded-md">
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
