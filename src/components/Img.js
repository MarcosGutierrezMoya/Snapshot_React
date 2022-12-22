import React, { useContext } from "react";
import '../App.css';
import { PhotoContext } from "../context/PhotoContext";


function Images() {

    const {photosArr} = useContext(PhotoContext)

    return(
        <div id="images">
            {photosArr}
        </div>
    )
}

export default Images;