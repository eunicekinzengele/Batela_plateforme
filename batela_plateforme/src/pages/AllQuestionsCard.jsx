import React from 'react'
import Footer from './Footer'
import HeroAllQuestions from './HeroAllQuestions'
import NavBar from './NavBar'
import QuestionAsked from './QuestionAsked'

export default function AllQuestionsCard() {
  return (
    <div>
        <NavBar/>
        <HeroAllQuestions/>
        <QuestionAsked/>
        {/* <Footer/> */}
    </div>
  )
}
