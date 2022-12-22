import { useContext } from "react"
import { PhotoContext } from "../context/PhotoContext"


function InputSearch() {
    
    const {takeSearch} = useContext(PhotoContext)

    return(
        <form onSubmit={takeSearch}>
            <input type="text" style={{padding:"10px", width:"20rem"}} />
        </form>
    )
}

export default InputSearch;