import React, { useContext } from 'react'
import data from '../assets/data'
import {Langc}  from '../My Contexts/LangContext'
import './Ccontent.css'
export default function Ccontent() {
    const {lang}=useContext(Langc);
  return (
    <div>
      <h4 className='h1l'>{data[lang].title}</h4>
    </div>
  )
}
