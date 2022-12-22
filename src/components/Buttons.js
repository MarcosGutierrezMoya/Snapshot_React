import React, {useContext} from 'react';
import { PhotoContext } from '../context/PhotoContext';
import {NavLink} from 'react-router-dom'

function Buttons() {

    const {buttonSearch} = useContext(PhotoContext);

    return(
        <div id="buttons">
            <NavLink to={'/Mountain'} className="btn" onClick={buttonSearch}>Mountain</NavLink>
            <NavLink to={'/Beach'} className="btn" onClick={buttonSearch}>Beach</NavLink>
            <NavLink to={'/Birds'} className="btn" onClick={buttonSearch}>Birds</NavLink>
            <NavLink to={'/Food'} className="btn" onClick={buttonSearch}>Food</NavLink>
        </div>        
    )
}

export default Buttons;