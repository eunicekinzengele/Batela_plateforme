import React from 'react'
import Image from 'next/image';
import satisfactionBatela from '../Images/satisfactionBatela.png';
import { FaCheck } from "react-icons/fa";

export default function beforefooter() {
  return (
    <div className=' w-full flex  h-120'>
        <div className='w-1/2 h-96 	'>
          <p className=' px-20 text-3xl  py-10 font-semibold drop-shadow-lg pt-20 '>Pourquoi choisir d’utiliser <span className='text-purple-700'>Batela</span> ?  </p>
          <p className='px-20 text-base text-slate-600 pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora inventore sunt illo rerum ea non consequuntur tempore labore eaque ad.</p>
          <p className='px-20 flex text-base text-slate-600 pb-2'><FaCheck className=' mr-3 mt-1 text-lg text-purple-700'/>Vous avez une grande communauté des personnels soignants</p>
          <p className='px-20 flex text-base text-slate-600 pb-2'><FaCheck className=' mr-3 mt-1 text-lg text-purple-700'/>Vous avez une grande communauté des personnels soignants</p>
          <p className='px-20 flex text-base text-slate-600'><FaCheck className=' mr-3 mt-1 text-lg text-purple-700'/>Vous avez une grande communauté des personnels soignants</p>

        </div>
        <div className='w-1/2 items-center flex justify-start'>
          <Image className=' w-115 ' src={satisfactionBatela}/>
        </div>
    </div>
  )
}
