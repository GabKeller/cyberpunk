import { useState } from 'react'
import Navigate from './Navigate'
import Atributos from './Atributos'

function App() {
  const [tela, setTela] = useState('atributos') 
  /* atributos, origem, implantes, inventario */
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

  const [status,setStatus] = useState({
    HP:{
      MAX:20,
      ATUAL:15,
    },
    BLINDAGEM:{
      MAX:20,
      ATUAL:15,
    },
    HP_TEMP:{
      MAX:20,
      ATUAL:15,
    },
    RAM:{
      MAX:20,
      ATUAL:15,
    },
    HUMANIDADE:{
      MAX:20,
      ATUAL:10,
    },
    CARGA:{
      MAX:20,
      ATUAL:10,
    }
  })
  const [barraLateral,setBarraLateral] =  useState(false)
  const toggleBarra = () =>{
    setBarraLateral(barraLateral? false : true)
  } 

  const handleChange = (event,atributo) =>{
     setAtributos({...atributos,
                   [atributo]:event.target.value
     })
   }
  const handleStatusChange = (event,key,subKey) =>{
    setStatus((prevStatus) => ({
      ...prevStatus,
      [key]: {
        ...prevStatus[key],
        [subKey]: event.target.value,
      },
    }));
  }
   

  return (
    <>
        <Navigate toggleBarra={toggleBarra}></Navigate>
        <div className='flex flex-row h-full'>
          {barraLateral &&(
          <div id='barra-lateral' className=' bg-cyberYellow min-w-[200px] h-svh flex flex-col font-Orbitron  '>
            <button onClick={()=>setTela('origem')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Origem</button>
            <button onClick={()=>setTela('atributos')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Atributos</button>
            <button onClick={()=>setTela('implantes')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Implantes</button>
            <button onClick={()=>setTela('inventario')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Inventário</button>
          </div>)}
          {tela === 'atributos' && <Atributos status={status} 
                      atributos={atributos} 
                      handleChange={handleChange}
                      handleStatusChange={handleStatusChange}
          ></Atributos> }
        </div>
        
        
        
    </>
  )
}

export default App
