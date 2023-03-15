

function App() {
  return (
    // Header Section
    <>
    <header className="bg-black py-3 lg:py-6 text-gray-400 font-serif uppercase">
      {/* Header Container */}
    <div className="container flex items-center justify-between space-x-8 lg:space-x-16 ">
      {/* LOGO */}
      <h1 className=" lg:text-6xl text-4x1 font-bold text-gray-400 text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-slate-200">YEK</h1>
      {/* Navigation */}
      <nav className="flex justify-between flex-1">
        <div className="flex py-6 items-start text-xs lg:text-base space-x-8">
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">Movies</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">Celebrities</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">News</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">Blog</a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100">About</a>
          
        </div>
        {/* Login Area */}
        <div className="flex items-center space-x-8">
        {/* Search Area */}
        <form>
          <div className="border-r px-4  py-1 border-red-400">
            <input type="text" className="bg-transparent border-b border-red-500  focus:outline-none" placeholder="Search.."></input>
            <button className="font-semibold"><i className="fas fa-search"/></button>
          </div>

        </form>
        {/* Signup Area */}
        <div className="flex items-center space-x-8 text-sm">
          <a className="cursor">Login</a>
          <a className="bg-red-600 px-3 py-1 hover:bg-rose-600 hover:text-gray-600 cursor-pointer transition duration-100 rounded-sm whitespace-nowrap">Sign Up</a>
        </div>
        </div>
      </nav>
    </div>
    



    </header>




    </>
  );
}

export default App;
