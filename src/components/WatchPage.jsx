import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    searchParams.get("v"); //get the video id which starts from "v"

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    })
    return (
        <div className='px-15 py-5'>
            <iframe width="900" 
            height="500" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} //play the video inside the iframe
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage