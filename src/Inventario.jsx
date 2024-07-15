import React from 'react'
import addBtn from './assets/generalAssets/add.png'
import Equipamento from './components/Equipamento'

const Inventario = () => {
  return (
    
    <div className=' w-full m-4'>
        <div className='flex flex-row items-center'>
            <h3 className=' font-Orbitron text-cyberPurpleShine font-bold text-lg'>Inventário</h3>
            <button className='w-10 hover:bg-cyberPurpleStrong active:bg-cyberPurpleSecondary rounded-lg '><img src={addBtn} alt="add-button" /></button>
        </div>
        <div className=' bg-cyberPurpleShine w-full h-[1px] '></div>
        <div className='flex flex-row'>
            <button className=' text-cyberPurpleShine font-Orbitron focus:border hover:border border-cyberPurpleShine rounded-md m-1 p-1'>Equipado</button>
            <button className=' text-cyberPurpleShine font-Orbitron focus:border hover:border border-cyberPurpleShine rounded-md m-1 p-1'>Geral</button>
            <button className=' text-cyberPurpleShine font-Orbitron hover:border border-cyberPurpleShine rounded-md m-1 p-1'>Veículos</button>
        </div>
        <div className=' grid grid-cols-3 gap-5'>
            <Equipamento equipamento={'Alll'} preco='5.000' tipo='Gadget' quantidade='4' checked={true}></Equipamento>

        </div>
        
    </div>
    
  )
}

export default Inventario