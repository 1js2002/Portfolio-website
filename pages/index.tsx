import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
//import WorkExperience from './components/WorkExperience'
export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Head>
				<title>Shiraan || Portfolio</title>
			</Head>
			<Header />
			<section className="snap-start" id="hero">
				<Hero />
			</section>
			<section className="snap-center" id="about">
				<About />
			</section>
			{/* <section className="snap-center" id="experience">
				<WorkExperience />
			</section> */}
			<section className="snap-start" id="skills">
				<Skills />
			</section>
			<section className="snap-start" id="projects">
				<Projects />
			</section>
			<section className="snap-start" id="contact">
				<ContactMe />
			</section>
		</div>
	);
}