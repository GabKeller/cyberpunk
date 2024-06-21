import React from 'react'
import AtributeBox from './components/AtributeBox'
import StatusBox from './components/StatusBox'

const Atributos = ({status,atributos, handleChange, handleStatusChange}) => {
  return (
    <div className='ml-2'>
        <h3 className=' font-Orbitron text-cyberBlue text-lg font-bold ml-2 mt-3'>Atributos</h3>
        <div className=' bg-cyberBlue w-full h-[1px] mb-2'></div>
        <div id='container-atributes' className='flex flex-row'>
            {Object.entries(atributos).map(([key,value])=>
            (<AtributeBox atributo={key} value={value}  handleChange={handleChange}/>))}
        </div>
        <h3 className=' font-Orbitron text-cyberBlue text-lg font-bold mt-3 ml-2'>Status</h3>
        <div className=' bg-cyberBlue w-full h-[1px] mb-2 '></div>
        <div id='container-status' className='flex flex-row gap-2'>
            {Object.entries(status).map(([key,value])=>
            (<StatusBox  status={key} maxValue={value.MAX} atualValue={value.ATUAL}  handleStatusChange={handleStatusChange}/>))}
        </div>
    </div>
  )
}

export default Atributos