import React from 'react'
import hp from '../assets/pontos/hit points.png'
import blindagem from '../assets/pontos/blindagem.png'
import temphp from '../assets/pontos/temp hp.png'
import ram from '../assets/pontos/ram.png'
import humanidade from '../assets/pontos/humanidade.png'
import cargaMental from '../assets/pontos/carga mental.png'

const StatusBox = ({status ,maxValue,atualValue, handleStatusChange}) => {
  return (
    <>
        <div className=" w-[145px] ml-2 h-20 border-r-2 border-l-2 border-cyberBlue rounded-md flex flex-col items-center">
            <div className='flex flex-row items-center'>
                <p className='text-white font-Orbitron text-xs'>{status}</p>
                {status === 'HP' && <i className="ml-3 p-0"><img className="h-[30px] w-[30px] " src={hp} alt="icon-hitpoints"/></i>}
                {status === 'BLINDAGEM' && <i className="ml-3 p-0"><img className="h-[30px] w-[30px] " src={blindagem} alt="icon-blindagem"/></i>}
                {status === 'HP_TEMP' && <i className="ml-3 p-0"><img className="h-[30px] w-[30px] " src={temphp} alt="icon-temphitpoint"/></i>}
                {status === 'RAM' && <i className="ml-3 p-0"><img className="h-[30px] w-[30px] " src={ram} alt="icon-ram"/></i>}
                {status === 'HUMANIDADE' && <i className="ml-3 p-0"><img className="h-[30px] w-[30px] " src={humanidade} alt="icon-humanidade"/></i>}
                {status === 'CARGA' && <i className="ml-3 p-0"><img className="h-[30px] w-[30px] " src={cargaMental} alt="icon-cargamental"/></i>}
            </div>
            <div className='flex flex-row items-center'>
                <p className='text-white font-Orbitron text-xs' >Max:</p>
                <input value={maxValue} onChange={(e) => handleStatusChange(e,status,'MAX')} className="text-xl w-[50px] h-[25px] bg-primary text-white border-1 h-10 w-[70px] text-center" type="number"/>
            </div>
            <div className='flex flex-row items-center'>
                <p className='text-white font-Orbitron text-xs' >Atual:</p>
                <input value={atualValue} onChange={(e) => handleStatusChange(e,status,'ATUAL')} className="text-xl w-[50px] h-[25px] bg-primary text-white border-1 h-10 w-[70px] text-center" type="number"/>
            </div>
        </div>
    </>
  )
}

export default StatusBox