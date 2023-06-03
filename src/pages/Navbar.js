import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="w-full h-16 flex items-center px-14 justify-between bg-black">
        <Link to={"/"} className="text-3xl text-white font-semibold font-Montesarrat">Data Mahasiswa</Link>
        
        <div className="flex">
          <Link to={"/add-user"} className="hover:bg-gray-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add New</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;



