import React from 'react'


export default function MainNavbar(){
    return(
        <div class="grid grid-rows-1 grid-cols-3 p-6">
            <div className="Logo" class="flex flex-row flex-nowrap flex-initial w-40 h-10">
                <img src="https://htmldemo.net/flone/flone/assets/img/logo/logo.png"></img>
            </div>

            <div className="MenuItems" class="grid grid-rows-1 grid-cols-4 gap-x-4 flex flex-row flex-nowrap flex-initial font-medium pb-0 pt-4 font-serif text-xl">
                <div><a href="#">Home</a></div>
                <div><a href="#">Order</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Contact</a></div>
            </div>

            <div className="Search" class="flex flex-row flex-nowrap flex-initial pb-0 pt-4 font-serif text-xl px-40 font-black">
                <div><input class="rounded-full bg-slate-100 border-width-2 border-l-4 border-r-4" type="text" name="searchbar" placeholder="search"></input></div>
            </div>
        </div>
    )
}