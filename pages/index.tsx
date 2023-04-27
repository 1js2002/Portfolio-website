import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Blogs from '@/components/Blogs'

export default function Home() {
  return (
    <div className='bg-[#363636] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Shiraan's || Portfolio</title>
      </Head>

      <Header/>

      <section id="hero" className='snap-start'>
        <Hero/>
      </section>

      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* <section id="experience" className='snap-center'>
        <WorkExperience/>
      </section> */}
      
      <section id="skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>
      
      <section id="blogs" className='snap-start'>
        <Blogs/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>

      
      <Link
      href='#hero'>
        <footer className='sticky bottom-20 md:bottom-8 justify-end flex w-full cursor-pointer pr-10' >
          <div className='flex items-center justify-center'>
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
            cursor-pointer '
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa34f425448486.5604c3fe8a13a.jpg" alt="" />
          </div>
        </footer>
      </Link>

    </div>
  )
}