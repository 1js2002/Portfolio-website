import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    className=' flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            Skills
        </h3>
        {/* <h3 className='absolute top-20 uppercase tracking-[3px] text-gray-500
        text-sm'>
            Hover over a skill for current proficiency
        </h3> */}

        <div className='grid grid-cols-4 gap-3 mt-10 md:mt-20 xl:pt-28 pt:30 '>
            <Skill src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain-wordmark.svg" name="node js" />
            <Skill src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nextjs/nextjs-original-wordmark.svg" name="next js" />
            <Skill src="https://cdn.worldvectorlogo.com/logos/react-2.svg" name="react js"/>
            <Skill src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg" name="Tailwind css" />  
            <Skill src="https://cdn.worldvectorlogo.com/logos/c.svg" name="C++" />
            <Skill src="https://cdn.worldvectorlogo.com/logos/python-5.svg" name="python"/>
            <Skill src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" name="javascript" />
            <Skill src="https://cdn.worldvectorlogo.com/logos/html5-2.svg" name="html"/>
            <Skill src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" name="CSS"/>  
            <Skill src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg" name="NPM" />
            <Skill src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" name="firebase" />
            <Skill src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" name="monogDB"/>
            <Skill src="https://cdn.worldvectorlogo.com/logos/docker.svg" name="Docker"/>
            <Skill src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/kubernetes/kubernetes-plain.svg" name="Kubernetes"/>  
            <Skill src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" name="GIT"/>  
            <Skill src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sqlite/sqlite-plain-wordmark.svg" name="SQL" />  
            
        </div>

    </motion.div>
  )
}

export default Skills