import { useState } from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState("")
  const [secondvalue, setsecondvalue] = useState("")
  
 function changefirst(e){
  setvalue(e.target.value)
 }

 function changesecond(e){
  setsecondvalue(e.target.secondvalue)
 }
  return (
    <>
      <label for="phone">first name:</label>
      <input onChange={changefirst}></input>

      <label for="phone">last name:</label>
      <input onChange={changesecond}></input>

      <h3>your ticket will be issued to:{value}{secondvalue}</h3>
      <h2>{secondvalue}</h2>

    </>
  )
}

export default App
