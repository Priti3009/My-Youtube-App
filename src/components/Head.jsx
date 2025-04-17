import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";



const Head=()=>{
    const [searchQuery,setSearchQuery]=useState("");
    console.log(searchQuery);
    
    useEffect(()=>{
        //api call everytime searchQuery is changed
        const timer = setTimeout(()=>getsuggestions(),3000);
        
        return()=>{
            clearTimeout(timer);
        }
            
    },[searchQuery]);
    const getsuggestions = async () => {
        try {
          const data = await fetch(`http://localhost:5000/suggest?q=${searchQuery}`);
          const json = await data.json();
          console.log("Suggestions:", json[1]); // Index 1 contains the suggestions
        } catch (err) {
          console.error("Error fetching from proxy:", err);
        }
      };
      
    
    const dispatch=useDispatch();
    const handletoggleMenu=()=>{
        dispatch(toggleMenu());
    };
return (
    <div className="grid grid-flow-col m-2 p-4 shadow">
        <div className="flex col-span-1">
            <img onClick={()=>handletoggleMenu()} className="h-7 cursor-pointer" alt="menu" src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-11.jpg"/>
            <img className="h-7 mx-2" alt="logo" src="https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png"/>
        </div>
        <div className="flex col-span-10">
            <input className="border border-gray-400 w-1/2 rounded-l-full ml-10" 
            type="text" 
            value={searchQuery} 
            onChange={(e)=>setSearchQuery(e.target.value)} />
            <button className="border border-gray-400   rounded-r-full p-2 px-5 bg-gray-100" ><img className="w-4 m-1" src="https://www.freepnglogos.com/uploads/search-png/search-tubshroom-the-revolutionary-hair-catcher-snare-and-31.png" alt="search" /></button>

        </div>
        <div className="col-span-1">
            <img className="h-8" src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="user" />
        </div>
    </div>
)
}
export default Head