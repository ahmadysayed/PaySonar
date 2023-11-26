import React from 'react';


function Header() {

  return (
    <div class="border-b bg-[#F1F2F6] border-[#B4BBBA4D] ">
        <header class="container flex items-center justify-between w-full py-8 mx-auto">
            <div class="flex items-center gap-x-12">
            <a routerLinkActive="" routerLink="/">
                <div class="w-[67px] h-[67px] bg-teal-600 rounded-full ">
                </div>
            </a>
            <div>
                <ul class="flex items-center gap-x-5 ">
                <li class="text-[24px] hover:cursor-pointer !font-normal"><a routerLinkActive="" routerLink="/history">
                    Home</a></li>
                <li class="text-[24px] hover:cursor-pointer !font-normal"><a routerLinkActive="" routerLink="/profile">
                    Profile</a></li>
                <li class="text-[24px] hover:cursor-pointer !font-normal"><a routerLinkActive="" routerLink="/summary">
                    Summary</a></li>
                <li class="text-[24px] hover:cursor-pointer !font-normal"><a routerLinkActive="active" routerLink="/about">
                    About</a></li>
                <li class="text-[24px] hover:cursor-pointer !font-normal"><a routerLinkActive="active" routerLink="/contact">

                    contact</a></li>
                </ul>
            </div>
            </div>

            <div class="flex items-center gap-x-5">
            <button
                class="px-3 py-2 !font-normal transition-colors duration-300 border-2 rounded-md border-paysonarTeal-normal hover:text-white hover:bg-paysonarTeal-normal ">Sign
                In</button>
            <button
                class="px-3 py-2 !font-normal text-white transition-colors duration-300 border-2 rounded-md border-paysonarTeal-normal hover:text-black bg-paysonarTeal-normal hover:bg-white ">Sign
                Up</button>
            </div>
        </header>
    </div>
  )
}

export default Header
