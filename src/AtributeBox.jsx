import React from 'react'
import forca from './assets/atributos/forca.png'
import con from  './assets/atributos/constituicao.png'
import dex from './assets/atributos/destreza.png'
import agi from './assets/atributos/agilidade.png'
import psique from './assets/atributos/psique.png'
import int from './assets/atributos/inteligencia.png'

const AtributeBox = ({atributo,value, handleChange}) => {
  let mod = Math.floor(value/2-5)
  return (
    <div className=" m-4 w-22 h-28 border-r-2 border-l-2 border-cyberYellow bg-primary2 rounded-md flex flex-col justify-between items-center">
            <p className='text-white font-Orbitron'>{atributo}</p>
            {atributo ==='FOR' && (
            <i><img className="h-7" src={forca} alt="icon-strength"/></i>)}
            {atributo ==='CON' && (
            <i><img className="h-7" src={con} alt="icon-constituicao"/></i>)}
            {atributo ==='AGI' && (
            <i><img className="h-7" src={agi} alt="icon-agilidade"/></i>)}
            {atributo ==='DES' && (
            <i><img className="h-7" src={dex} alt="icon-destreza"/></i>)}
            {atributo ==='PSI' && (
            <i><img className="h-7" src={psique} alt="icon-psique"/></i>)}
            {atributo ==='INT' && (
            <i><img className="h-7" src={int} alt="icon-intelecto"/></i>)}
            <div className='flex flex-col justify-start items-start'>
              <div className='flex flex-row justify-end items-center g-0  h-6 ml-2' > 
                <p className='text-white font-Orbitron font-bold'>Atr:</p>
                <input placeholder={value} className="text-xm w-[3rem] bg-transparent text-white border-1 h-10 mb-3 text-center ml-2 font-Orbitron" 
                      type="number" value={value}
                      onChange={(e) => handleChange(e,atributo)}/>
              </div>
              <div className='flex flex-row justify-end items-center ml-2' > 
                <p className='text-white font-Orbitron font-bold'>Mod:</p>
                <p className='text-white font-Orbitron font-bold ml-2'>{mod}</p>
              </div>
            </div>
            
    </div>
  )
}

export default AtributeBox