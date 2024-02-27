import React from "react";
import { motion } from "framer-motion";
import coding from "@/public/coding.png";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929 p-10] hover:opacity-100
        opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className=" rounded-full object-cover object-center"
        src="coding.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="uppercase text-3xl font-bold text-white">
          FullStack Developer
        </h4>
        <p className="uppercase font-light text-sm mt-1">
          @SUM IT Consultancies
        </p>
        <div className="flex space-x-2 my-2">
          {/* <img
            className="h-10 w-10 rounded-full"
            src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
            alt=""
          /> */}
        </div>
        <p className="uppercase py-5 text-gray-300">Feb, 2024 - Present</p>
        <ul className="list-disc space-y-4 text-sm md:text-xl">
          <li>Contributing to the development of an e-commerce platform</li>
          <li>using ASP.NET MVC as the primary technology stack</li>
          {/* <li>Summary points Summary points Summary points</li> */}
        </ul>
      </div>
    </article>
  );
}
