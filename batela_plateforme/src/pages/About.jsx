import React from 'react'
import Image from 'next/image';
import aboutImg from "../Images/aboutImg.png";

export default function About() {
  return (
    <div className=' w-full flex items-center h-120 bg-slate-200'>
        <div className='w-1/2 h-96	'>
          <h3 className=' text-xl px-20 py-6 pt-14 font-medium text-purple-700 drop-shadow-lg	'>A PROPOS DE NOUS</h3>
          <p className=' px-20 text-3xl  py-4 font-semibold drop-shadow-lg	'>La santé est precieuse  et <span className='text-purple-700'>nous voulons en prendre soin</span> </p>
          <p className='px-20 text-base text-slate-600'>Nous servons notre communauté en leur permettant de poser des questions liées à la santé à ses confrères et consoeurs des différentes spécialités. </p>
        </div>
        <div className='w-1/2 h-96 items-center flex justify-start'>
          <Image className=' w-110 drop-shadow-2xl	' src={aboutImg}/>
        </div>
    </div>
  )
}
