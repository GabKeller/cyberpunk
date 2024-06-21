import React from 'react'
import cyberpunklogo from './assets/cyberpunk-logo.png'
import hamburguer from './assets/generalAssets/hamburguer.png'

const Navigate = ({toggleBarra}) => {
  return (
    <nav className='w-full flex flex-row justify-between items-center border-b-4 border-cyberYellow py-4 m-0'>
        <button className=' ml-5 w-14 hover:animate-pulse' onClick={toggleBarra}>
          <img src={hamburguer} alt="icon-hamburguer" />
        </button>
        <div id="infos">
            <div className="flex flex-row">
                <h1 className=" font-Orbitron text-white text-2xl ml-4 cursor-pointer ">Nome:</h1>
                <input type="text" className="bg-primary text-white ml-2 text-2xl" placeholder="Jonny Silverhand"/> 
            </div>
            <div className="flex flex-row">
                <h1 className=" font-Orbitron text-white text-2xl ml-4 cursor-pointer ">Nível:</h1>
                 <input type="number" className="bg-primary text-white ml-4 text-2xl" placeholder="0"/>
            </div>
        </div>
        <a className="w-[400px] " target="_blank" href="https://docs.google.com/document/d/1L3nlV8RJswA3XamSiCyaBhsTjpI3KdnGKmvOHmou5eE/edit#heading=h.mlhjmznvqgke">
             <img src={cyberpunklogo} alt="logo-cyberpunk"/> 
        </a>
    </nav>
  )
}

export default Navigate