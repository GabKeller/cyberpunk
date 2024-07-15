import { useState } from 'react'
import React from 'react'
import Navigate from './Navigate'
import Atributos from './Atributos'
import Inventario from './Inventario'

const Tela = () => {

    const [tela, setTela] = useState('origem') 
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
      const [spotify, setSpotify] = useState('false')
      const toggleSpotify = () =>{
        setSpotify(spotify? false : true)
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
        <Navigate toggleBarra={toggleBarra} toggleSpotify={toggleSpotify}></Navigate>
        <div className='flex flex-row h-full'>
          {barraLateral &&(
          <div id='barra-lateral' className=' bg-cyberYellow min-w-[200px] h-svh flex flex-col font-Orbitron  '>
            <button onClick={()=>setTela('origem')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Origem</button>
            <button onClick={()=>setTela('atributos')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Atributos</button>
            <button onClick={()=>setTela('implantes')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Implantes</button>
            <button onClick={()=>setTela('inventario')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Inventário</button>
            <button onClick={()=>setTela('hacking')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Hacking</button>
            <button onClick={()=>setTela('hacking')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>Psi-Module</button>
            <button onClick={()=>setTela('hacking')} className=' bg-cyberYellowSecondary text-lg font-bold m-1 hover:border rounded-md border-black p-1 '>RedeAntiga</button>
         
         
          </div>)}
          {spotify &&
          <iframe className='m-4'
           style={{borderRadius: '12px'}} 
           src="https://open.spotify.com/embed/playlist/4Z4tIpy755U8UnKoeb3VR9?utm_source=generator"
           width="40%" height="752" 
           frameBorder="0" 
           allowfullscreen="" 
           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
           loading="lazy">
         </iframe>}
          {tela === 'atributos' && <Atributos status={status} 
                      atributos={atributos} 
                      handleChange={handleChange}
                      handleStatusChange={handleStatusChange}
          ></Atributos> }
          {tela === 'inventario' && <Inventario></Inventario>}
        </div>
        
        
        
    </>
  )
}

export default Tela