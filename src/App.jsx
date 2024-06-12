import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigate from './Navigate'
import AtributeBox from './AtributeBox'


function App() {
  const [atributos,setAtributos] = useState({
    FOR:8,
    AGI:8,
    CON:8,
    DES:8,
    INT:8,
    PSI:8
  })
  let modFor = Math.floor(atributos.FOR/2-5) 
  let modCon = Math.floor(atributos.CON/2-5) 
  let modAgi = Math.floor(atributos.AGI/2-5) 
  let modDes = Math.floor(atributos.DES/2-5) 
  let modInt = Math.floor(atributos.INT/2-5) 
  let modPsi = Math.floor(atributos.PSI/2-5) 

  const handleChange = (event,atributo) =>{
     setAtributos({...atributos,
                   [atributo]:event.target.value
     })
   }
   

  return (
    <>
        <Navigate></Navigate>
        <div className='flex flex-row'>
          {Object.entries(atributos).map(([key,value])=>
            (<AtributeBox  atributo={key} value={value}  handleChange={handleChange}/>))}
        </div>
      
    </>
  )
}

export default App
