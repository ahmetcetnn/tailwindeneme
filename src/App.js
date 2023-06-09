
import Sectiontwo from "./Components/Sectiontwo";
import React from 'react'

function App() {
  return (
    // Header Section
    <>
    <header className="bg-black py-3 pl-10 lg:py-6 text-gray-400 font-serif uppercase">
      {/* Header Container */}
    <div className="container flex items-center justify-between space-x-8 lg:space-x-16 ">
      {/* LOGO */}
      <h1 className=" lg:text-4xl text-3x1 font-bold text-gray-400 text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-slate-200">YEKFLIX</h1>
     
      {/* Navigation */}
      <nav className="flex justify-between flex-1">
        {/* MENU */}
        <div className="hidden md:flex py-6 items-start text-xs lg:text-base space-x-4 lg:space-x-8">
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">Movies</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">Celebrities</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">News</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">Blog</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">About</a>
          <form>
          <div className="border-r px-4  py-1 border-red-400">
            <input type="text" 
            className="bg-transparent border-b border-red-500 w-24 lg:w-44 focus:outline-none" 
            placeholder="Search.."></input>
            <button className="font-semibold"><i className="fas fa-search"/></button>
          </div>

        </form>
        </div>
        {/* Login Area */}
        <div className="flex items-center space-x-4 lg:space-x-8">
        {/* Search Area */}
        
        {/* Signup Area */}
        <div className="hidden md:text-xs md:flex items-center space-x-4 lg:space-x-8 lg:text-base">
          <a className="cursor-pointer md:text-sm">Login</a>
          <a className="bg-red-600 px-3 py-1 hover:bg-rose-600 hover:text-gray-600 cursor-pointer transition duration-100 rounded-sm whitespace-nowrap">Sign Up</a>
        </div>
        </div>
      </nav>
       {/* Mobile Menu */}
       <div className="block md:hidden mr-14">
        <div className="space-y-1 cursor-pointer">
          <div className="bg-slate-500 w-8 h-1 rounded-full"></div>
          <div className="bg-slate-500 w-8 h-1 rounded-full"></div>
          <div className="bg-slate-500 w-8 h-1 rounded-full"></div>
        </div>
      </div>
    </div>
    



    </header>
    <Sectiontwo/>
   




    </>
  );
}

export default App;
