import React, {useContext} from 'react'
import BtnToggle from '../BtnToggle'
import './Content.css'
import {ThemeContext} from '../ThemeContext'

export default function Content() {

    const {theme} = useContext(ThemeContext)

    console.log(theme);
    
    return (
        <div >
            <BtnToggle />
            
        </div>
    )
}
