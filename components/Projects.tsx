import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image';
import quiz from '../public/quiz.jpg';
import chatcord from '../public/chatcord.jpg';
import portfolio from '../public/portfolio.jpg';


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
    <li className="card">
      <div>
        <h3 className="card-title">Google Keep Clone</h3>
        <img src="data:image/png;base64,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" alt=""/>
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
        <img src="https://github.com/1js2002/Keeper-Project/blob/main/public/portfolio.JPG?raw=true" alt=""/>
        
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
          <img src="https://github.com/1js2002/Keeper-Project/blob/main/public/quiz%20app.JPG?raw=true" alt=""/>

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
          <img src="https://github.com/1js2002/Keeper-Project/blob/main/public/chatcord.JPG?raw=true" alt=""/>

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