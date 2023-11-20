import React, { useState } from 'react'
import './Calcultrise.css'
import LD from '../LD';
export default function Tp1() {
  const [n1,setn1]=useState("");
  
 const Result=(e)=>{
  setn1(n1.concat(e.target.name));

 }
 const cler=()=>{
  setn1(n1.slice(0,n1.length-1));
}
const clear=()=>{
setn1("");
}
const calculate=()=>{
  try{
    setn1(eval(n1).toString());
  }catch{
    setn1("Error")
  }
}

  
  return (
    <div className='contaire'>
       
      <div id='keypade'>
      
      <input type="text"  value={n1} id='reslta'/><br/>
      <input type="button" value="clear"  onClick={clear} id="C"  name='clear' />
      <input type="button" value="C"  onClick={cler} id='egal' />
      <input type="button" value="/"  onClick={Result} className='zere' style={{backgroundColor: 'gold'}} name='/'/><br/>
      <input type="button" value="7"  onClick={Result} className='zere' name='7'/>
      <input type="button" value="8"  onClick={Result} className='zere' name='8'/>
      <input type="button" value="9"  onClick={Result} className='zere' name='9'/>
      <input type="button" value="*"  onClick={Result} className='zere' style={{backgroundColor: 'gold'}} name='*'/><br/>
      <input type="button" value="4"  onClick={Result} className='zere' name='4'/>
      <input type="button" value="5"  onClick={Result} className='zere' name='5'/>
      <input type="button" value="6"  onClick={Result} className='zere' name='6'/>
      <input type="button" value="-"  onClick={Result} className='zere' style={{backgroundColor: 'gold'}} name='-'/><br/>
      <input type="button" value="1"  onClick={Result} className='zere' name='1'/>
      <input type="button" value="2"  onClick={Result} className='zere' name='2'/>
      <input type="button" value="3"  onClick={Result} className='zere' name='3'/>
      <input type="button" value="+"  onClick={Result} className='zere' style={{backgroundColor: 'gold'}} name='+'/><br/>
      <input type="button" value="0"  onClick={Result} className='zere' name='0'/>
      <input type="button" value="."  onClick={Result} className='zere' name='.'/>
      <input type="button" value="="  onClick={calculate}id='ega' name='='/>
     
    </div>
    </div>
  )
}
