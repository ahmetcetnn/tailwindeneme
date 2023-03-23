


import React from "react";

function Sectiontwo() {
  return (
    <>
      <section className="h-64 md:h-96  lg:h-128 group relative">
        {/* Hero Image */}
        <img
          src="https://c4.wallpaperflare.com/wallpaper/517/662/553/batman-4k-computer-desktop-backgrounds-wallpaper-preview.jpg"
          alt="main photo"
          className="h-full w-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
          {/* Hero content container */}
          <div className="container">
            <h3 className="text-yellow-400 text-sm lg:text-base tracking-wide uppercase group-hover:mb-1 duration-500">
              actıon, drama, thrıller
            </h3>
            <h1 className=" text-3xl lg:text-5xl text-white group-hover:mb-1 duration-500 ">
              THE DARK KNIGHT
            </h1>
            <p className="text-white group-hover:mb-2 duration-500 w-3/4 text-sm lg:text-base lg:w-2/3">
              “Because he's the hero Gotham deserves, but not the one it needs
              right now. So we'll hunt him. Because he can take it. Because he's
              not our hero. He's a silent guardian, a watchful protector. A dark
              knight.”
            </p>
            {/* detail container */}
            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-5 lg:group-hover:mb-15 duration-1000 ">
              {/* watch */}
              <div className="flex space-x-2 items-center cursor-pointer ">
                <a className="text-gray-100 uppercase lg:text-lg hover:text-red-600 duratin-500">
                  watch traıler
                </a>
                <div className="flex w-8 h-8 text-center justify-center items-center rounded-full bg-red-600 text-gray-300 ">
                  <i className="fas fa-play" />
                </div>
              </div>
              {/* INFO */}
              <div className="flex space-x-2 items-center cursor-pointer ">
                <a className="text-gray-100 uppercase md:text-xs lg:text-lg hover:text-red-600 duratin-500">
                  Full Synopsis
                </a>
                <div className="flex w-8 h-8 text-center justify-center items-center rounded-full bg-red-600 text-gray-300 ">
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movies section */}
      <section className="py-24 bg-black ">
        {/* Movies content */}
        <div className="container flex space-x-16">
          {/* sol taraf */}
          {/* titles */}

          <div className=" basis-2/3 ">
            <div className="flex space-x-2  divide-red divide-opacity-50 mb-8 ">
              <h2 className="text-2xl tracking-wider text-red-500">Latest</h2>
              <h2 className="text-2xl tracking-wider text-gray-500 hover:text-red-600 duration-300 cursor-pointer">
                Popular
              </h2>
              <h2 className="text-2xl tracking-wider text-gray-500 hover:text-red-600 duration-300 cursor-pointer">
                Best
              </h2>
            </div>
            {/* images container */}
            <div className="flex flex-wrap ">
              {/* image 1 */}
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://iphoneswallpapers.com/wp-content/uploads/2018/07/Aquaman-HD-iPhone-Wallpaper.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}
                
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">AQUAMAN</h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sunt.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://wallpapercave.com/wp/wp6875764.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}
                
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">FLASH</h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sunt.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://w0.peakpx.com/wallpaper/514/2/HD-wallpaper-iron-man-iron-man-hollywood-super-hero-iphone.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}
                
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">IRONMAN</h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sunt.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://w0.peakpx.com/wallpaper/959/836/HD-wallpaper-captain-america-avenger-shield-steve-rogers.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}
                
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">CAPTAIN AMERICA</h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sunt.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50 "
                />
                {/* image detail container */}
                
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">SPIDERMAN</h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sunt.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://r1.ilikewallpaper.net/iphone-wallpapers/download-108622/justice-league-zack-superman-black-suit-4k.jpg"
                  alt="logo"
                  className="group-hover:scale-110 duration-200 group:hover:opacity-50"
                />
                {/* image detail container */}
                
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">SUPERMAN</h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sunt.</p>
                </div>
              </div>
            </div>
          </div>
          {/* sag taraf */}
          <div className="basis1/3 bg-blue-500"></div>
        </div>
      </section>
    </>
  );
}

export default Sectiontwo;
