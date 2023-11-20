import React, { useContext } from 'react'; // Ensure useContext is imported

import imfr from '../assets/france.svg';
import imeng from '../assets/united-kingdom.svg';
import imesp from '../assets/spain.svg';
import { Langc } from '../My Contexts/LangContext';
import './Cicon.css'
export default function Cicones() {
  const {setLang } = useContext(Langc);

  return (
    <div className='za' >
      <img className='z' onClick={() => setLang('FR')} src={imfr} width='100' height='100' alt="France Flag" />
      <img className='z2'  onClick={() => setLang('EN')} src={imeng} width='100' height='100' alt="UK Flag" />
      <img className='z3'  onClick={() => setLang('ES')} src={imesp} width='100' height='100' alt="Spain Flag" />
    </div>
  );
}
