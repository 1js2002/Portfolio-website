import { motion } from "framer-motion";
import { FC } from "react";

const About: FC = () => {
	return (
		<motion.div
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img
				className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
				src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg"
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				alt="Image"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
					background:
				</h4>
				<p className="text-base">
        Hi there! My name is Dinesh and I am a 4th-year student pursuing a Bachelor's degree in Information Technology Engineering. 
        I am a passionate geek developer and an open-source enthusiast with a strong interest in learning new technologies.
        I love exploring the latest advancements in the tech world.
        Apart from my academic pursuits, I am an avid listener of audiobooks and believe that reading can be a
        great way to expand our minds and broaden our perspectives. I also find meditation to be a great way to clear my mind and focus on my goals.
        In my free time, I like to work on personal coding projects and contribute to open-source projects as well. 
        I am someone who loves technology and is always looking for new challenges to grow. I have creative and critical
        thinking skills that make me an ideal candidate for jobs that require these qualities.
				</p>
			</div>
		</motion.div>
	);
};

export default About;



