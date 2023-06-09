import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image';
import quiz from '../public/quiz.jpg';
import chatcord from '../public/chatcord.jpg';
import portfolio from '../public/portfolio.jpg';
import keep from "../public/keep.png"


type Props = {}

function Projects({}: Props) {

  const projects = [1, 2, 3, 4, 5];

  return (
<div className="h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center z-0 pr-3">

  <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
      text-2xl'>
        Projects
  </h3>

  <div className='container'>

  <ul className="cards">
    {/* <li className="card">
      <div>
        <h3 className="card-title">Weather AI </h3>
        <img src="https://github.com/1js2002/Keeper-Project/blob/main/public/weather.JPG?raw=true" alt=""/>
        <div className="card-content">
          <p>Using ChatGPT API and weather data, I developed a weather app that generates weather reports in response to conversational queries, providing users with personalized and accurate weather information.</p>
        </div>
      </div>
      
        <div className="card-link-wrapper">
          <a href="https://github.com/1js2002/GPT-4-weather-app" className="card-link">View source</a>
        </div>
    </li> */} 
    <li className="card">
      <div>
        <h3 className="card-title">Google Keep Clone</h3>
        <img src="keep.png" alt="ke"/>
        <div className="card-content">
          <p>This project is a Google Keep clone built using React Redux. It allows users to create and organize notes, set reminders, and collaborate with others.</p>
        </div>
      </div>
      
        <div className="card-link-wrapper">
          <a href="https://keeper-project-flax.vercel.app/" className="card-link">View demo</a>
        </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Portfolio Website</h3>
        <img src="portfolio.jpg" alt="pot"/>
        
        <div className="card-content">
          <p>Personal Portfolio Built with REACT.JS & NEXT.JS Using (JavaScript, TypeScript, Framer Motion, Tailwind CSS).</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="https://github.com/1js2002/Portfolio-website" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">QUIZEO</h3>
          <img src="quiz.jpg" alt="quiz"/>

        <div className="card-content">
          <p>This quiz app built with React Redux and Trivia API lets users test their knowledge with various categories and difficulty levels while managing the application state.</p>
        </div>
      </div>
      
        
        <div className="card-link-wrapper">
          <a href="https://quizeo-brown.vercel.app/" className="card-link">View demo</a>
        </div>
      
    </li>
    <li className="card">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
      }}
      animate={{
          x: 0,
          opacity: 1,
          scale: 1
      }}
      transition={{
          duration: 1.5
      }}
      >
        

        <h3 className="card-title">Chatcord </h3>
        <img src="chatcord.jpg"  alt="cht"/>
        <div className="card-content">
          <p>The chat app is a web application built using React and Socket.io. It allows users to communicate with each other in real-time via a chat interface. </p>
        </div>
      </motion.div>
      
        <div className="card-link-wrapper">
          <a href="https://chatcord-flax.vercel.app/" className="card-link ">View demo</a>
        </div>
      
      
    </li>
    
  </ul>
  
</div>
</div>
  )
}

export default Projects