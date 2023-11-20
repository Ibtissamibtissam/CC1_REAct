import React from 'react'
 //intergration graphique 
export default function Task({txt,deletefunction}) {
  return (
    <div>
      <input type='text'  readOnly value={txt}></input>
      <input type='button' onClick={deletefunction}  value="supprimer"></input>

    </div>
  )
}
