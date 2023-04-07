import React from 'react'
import Image from 'next/image'
import heroQuestionImg from '../Images/heroQuestionImg.png'

export default function HeroAllQuestions() {
  return (
    <div className='  w-full h-80 flex border-b-2 border-b-purple-300 '>
        <div className='  w-3/5 flex justify-end items-center'>
          <p className='  pl-28 text-3xl'> <span className=' text-purple-700 text-4xl  font-semibold'>Bienvenue</span> <br/>
            à la grande communauté dediée au partage d’expériences</p>
        </div>
        <div className=' w-3/5 flex justify-center items-center'>
          <Image className=' w-110' src={heroQuestionImg}/>
        </div>
    </div>
  )
}
