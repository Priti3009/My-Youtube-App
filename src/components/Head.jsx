const Head=()=>{
return (
    <div className="grid grid-flow-col m-2 p-4 shadow">
        <div className="flex col-span-1">
            <img className="h-7" alt="menu" src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-11.jpg"/>
            <img className="h-7 mx-2" alt="logo" src="https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png"/>
        </div>
        <div className="flex col-span-10">
            <input className="border border-gray-400 w-1/2 rounded-l-full ml-10" type="text" />
            <button className="border border-gray-400   rounded-r-full p-2 px-5 bg-gray-100" ><img className="w-4 m-1" src="https://www.freepnglogos.com/uploads/search-png/search-tubshroom-the-revolutionary-hair-catcher-snare-and-31.png" alt="search" /></button>

        </div>
        <div className="col-span-1">
            <img className="h-8" src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="user" />
        </div>
    </div>
)
}
export default Head