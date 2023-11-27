import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({hidden}) {
  return (
    <nav className=" border-gray-200 bg-gray-800">
      <div className=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        
        <div className={`md:w-1/3 mx-auto ${hidden ? "max-sm:hidden" : ""}`}> 
         <Link to={"./search"}>
         <input 
            type="text" 
            id="search-navbar" 
            className="block w-full p-2 text-xl text-gray-900 border  rounded-lg bg-gray-500    mx-auto" 
            placeholder="Search..."
          />
         </Link>
        </div>
        
        <div className='flex'>
          <a href="/"><p className='bg-white aspect-square w-10 grid place-items-center rounded-full'>J</p></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
