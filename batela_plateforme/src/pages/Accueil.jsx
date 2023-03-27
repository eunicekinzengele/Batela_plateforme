import React from 'react'
import Image from 'next/image';
import { isExpressionWithTypeArguments } from 'typescript';
import logo_batela from '../Images/logo_batela.png';


export default function Accueil() {
  return (
    <header className=' bg-red-500 h-16 flex'>
      <div className=' bg-amber-600 w-32 items-center flex content-center flex-col'>
        <Image className=' w-16 h-16' src={logo_batela} />
      </div>
      <div className=' bg-stone-500'>menu</div>
      <div className=' bg-lime-800'>recherche</div>
    </header>
  )
}
