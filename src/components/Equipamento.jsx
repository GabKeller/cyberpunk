import React from 'react'

const Equipamento = ({equipamento, tipo, preco, quantidade, checked}) => {
  return (
    <div className=' bg-cyberPurpleStrong p-2 ms-2  border border-cyberPurpleSecondary rounded-md w-[250px] font-Orbitron text-white '>
        <p className='text-lg border-b-[1px]'>{equipamento}</p>
        <p>{tipo}</p>
        <p>€${preco}</p>
        <p>Quantidade: {quantidade}</p>
        <div className='flex flex-row gap-2 items-center'> 
            <p>Equipado:</p>
            <input id="checkbox3" type="checkbox" 
            className="w-4 h-4 text-cyberPurple bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"/>
        </div>
    </div>
  )
}

export default Equipamento