import React, { useEffect, useState } from 'react';
import clave from '../api/config';
import axios from "axios";

export const PhotoContext = React.createContext();

function PhotoContextProvider({children}) {
    const url = "https://live.staticflickr.com/";
  
    const [photos,setPhotos] = React.useState([]);
    let [searchedText,setSearchedText] = React.useState("");
    const [photosArr,setPhotosArr] = React.useState([]);

    useEffect(()=>{
        if (searchedText!=="") {
          request();
        }
        async function request() {
          await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${clave}&tags=${searchedText}&format=json&nojsoncallback=1`)
          .then((response) => setPhotos(response.data.photos.photo));
        }        
    },[searchedText]);

    useEffect(()=>{
      setPhotosArr(photos.map((element,i)=>{
        console.log(searchedText);
        return(
          <img key={i} className="img" style={{backgroundImage: `url(${url}${element.server}/${element.id}_${element.secret}.jpg)`}}/>
        )
      }))
    },[photos]);
  
    function takeSearch(e) {
      e.preventDefault();
  
      setSearchedText(e.target.firstChild.value);
    }
    function buttonSearch(e) {
      setSearchedText(e.target.textContent);
    }


    return(
        <PhotoContext.Provider value={{buttonSearch,searchedText,takeSearch,photosArr}}>
            {children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider;