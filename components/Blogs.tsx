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
        Blog Posts
  </h3>

  <div className='container'>

  <ul className="cards">
    <li className="card">
      <div>
        <h3 className="card-title">Instagram Bot</h3>
        <img src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/fmqhTMu4IVU/upload/cc6658a008e3abc78584c2cf32fd269f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt=""/>
        <div className="card-content">
          <p>Instagram is one of the most popular social media platforms, with over a billion monthly active users. With such a...</p>
      </div>
      </div>
      
        <div className="card-link-wrapper">
          <a href="https://realblogs.hashnode.dev/automate-your-instagram-activity-a-step-by-step-guide-to-creating-a-bot-with-selenium-javascript" className="card-link">Read More </a>
        </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Kubernetes Components</h3>
        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1682148147096/8e6622b1-774e-4971-8718-adc34d2582a0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="Instagram bot"  />
        <div className="card-content">
          <p>The key components of Kubernetes, including API server, Controller manager, Kube-proxy, etc. We will discuss what each component does, how it relates to other components...</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="https://realblogs.hashnode.dev/understanding-kubernetes-components-api-server-kubelet-and-more" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Software Desgin Patterns</h3>
        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1681665324930/94463e2a-1466-48ce-bb74-1288a54f1df0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="Design Patterns" />
        <div className="card-content">
          <p>As a developer, you have probably encountered situations where you need to solve complex problems while also keeping your code organized, easy to maintain, and reusable.... </p>
        </div>
      </div>
      
        
        <div className="card-link-wrapper">
          <a href="https://realblogs.hashnode.dev/exploring-design-patterns-factory-builder-and-singleton-patterns" title="Software Desgin Patterns" className="card-link">Read More</a>
        </div>
      
    </li>
    <li className="card">
      <motion.div
      >
        <h3 className="card-title">Why Coding is Hard </h3>
        <img src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/dYEuFB8KQJk/upload/da8d5e0d051b2e28b454acf3de7862a2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="Coding is hard" />
        <div className="card-content">
          <p>In our increasingly digital world, coding has become an essential skill for many industries. From app development to website design, coding plays a...</p>
        </div>
      </motion.div>
      
        <div className="card-link-wrapper">
          <a href="https://realblogs.hashnode.dev/why-coding-is-so-hard" className="card-link ">Read More</a>
        </div>
      
      
    </li>
    
  </ul>
  
</div>
</div>
  )
}

export default Projects