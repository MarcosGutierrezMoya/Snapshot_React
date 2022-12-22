import { useContext } from "react"
import { PhotoContext } from "../context/PhotoContext"

          
function ImgTitle() {
    const {searchedText} = useContext(PhotoContext)
    return(
        <h3 style={{fontSize:"2rem",fontFamily: 'Josefin Sans, sans-serif',fontWeight:"700"}}>{[searchedText]}</h3>
    )
}

export default ImgTitle;