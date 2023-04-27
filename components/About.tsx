import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}
    className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full
    px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e477ztfmr2w72zjhwpk0avlzb5dm8eicdpkzly7g5cs&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        alt='user picture'
        className='mt-24 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
        rounded-full object-cover md:rounded-lg 
        xl:w-[400px] xl:h-[400px] '
        />
        <div className='space-y-3 px-0 md:px-10'>
            <h4 className='text-xl font-semibold '>
                Here is a <span className=' underline decoration-[#F7AB0A]/50'>
                little</span>{" "}background
            </h4>
            <p className='text-base'>
                - 👋 Hi there! My name is Dinesh.  <br></br>
                - 🎓 I have a Bachelor Degree in Information Technology. <br></br>
                - 🌍 I love exploring the latest advancements in the tech world.<br></br>
                - 💻 In my free time, I like to work on personal coding projects and contribute to open-source projects.<br></br>
                - 🌷 I also find meditation to be a great way to clear my mind and focus on my goals.<br></br>
                - ✌️ I'm open to opportunities.

            </p>
        </div>
        

        
    </motion.div>
  )
}

export default About