import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-400 p-4 flex justify-between items-centre">
      <div className="flex justify-between items-center">
        <img
          src="https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-256.png"
          alt="Logo"
          width="80"
          className="mr-10"
        />
        <ul className="flex justify-between items-center">
          <li className="px-2 mr-4  text-indigo-100 hover:text-green-200">
            <a href="/">Gallery</a>
          </li>
          <li className="px-2 mr-4 text-indigo-100 hover:text-green-200">
            <a href="/about">About</a>
          </li>
          <li className="px-2 mr-4 text-indigo-100 hover:text-green-200">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <ul className="flex justify-between items-center">
        <li className="p-2 mr-4 text-yellow-400 hover:text-green-200">Login</li>
        <li className="px-4 py-2 mr-4 text- bg-yellow-200 rounded text-indigo-400 hover:text-yellow-400">
          Sign up
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
