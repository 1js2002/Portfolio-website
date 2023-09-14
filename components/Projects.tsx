import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import quizeo from "../public/quizeo.png";
import chatcord from "../public/chatcord.png";
import port from "../public/port.png";
import keep from "../public/keep.png";
import home from "../public/home.png";
import tesla from "../public/tesla.png";
import ecom from "../public/ecom.png";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center z-0 pr-3"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500
      text-2xl"
      >
        Projects
      </h3>
      <div className="container">
        <ul className="cards">
          <li className="card">
            <div>
              <h3 className="card-title">ECOMMERCERY</h3>
              <img src="ecom.png" alt="ecom" />

              <div className="card-content">
                <p>
                  Revolutionize online shopping with our cutting-edge Next.js
                  e-commerce project. Powered by Tailwind, MongoDB, Firebase,
                  and Stripe, it delivers a seamless, secure, and visually
                  stunning shopping experience.
                </p>
              </div>
            </div>
            <div className="card-link-wrapper">
              <a
                href="https://github.com/1js2002/Ecommercery"
                className="card-link"
              >
                Read More
              </a>
            </div>
          </li>
          <li className="card">
            <div>
              <h3 className="card-title">Portfolio Website</h3>
              <img src="port.png" alt="pot" />

              <div className="card-content">
                <p>
                  Personal Portfolio Built with REACT.JS & NEXT.JS Using
                  (JavaScript, TypeScript, Framer Motion, Tailwind CSS).
                </p>
              </div>
            </div>
            <div className="card-link-wrapper">
              <a
                href="https://github.com/1js2002/Portfolio-website"
                className="card-link"
              >
                Read More
              </a>
            </div>
          </li>
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
            <h3 className="card-title">Tesla-clone </h3>
            <img src="tesla.png" alt="tesla" />
            <div className="card-content">
              <p>
                A cool website made with React.js that looks and feels like
                using a Tesla car.{" "}
              </p>
            </div>
            <div className="card-link-wrapper">
              <a href="https://tesla-rosy.vercel.app/" className="card-link ">
                View demo
              </a>
            </div>
          </li>
          <li className="card">
            <h3 className="card-title">Chatcord </h3>
            <img src="chatcord.png" alt="cht" />
            <div className="card-content">
              <p>
                The chat app is a web application built using vanilla JS and
                Socket.io. It allows users to communicate with each other in
                real-time via a chat interface.{" "}
              </p>
            </div>
            <div className="card-link-wrapper">
              <a
                href="https://github.com/1js2002/chatcord_"
                className="card-link "
              >
                View Code
              </a>
            </div>
          </li>
          <li className="card">
            <div>
              <h3 className="card-title">A+ studio </h3>
              <img src="home.png" alt="Aplus" />

              <div className="card-content">
                <p>
                  This project is a front-end website built using Tailwind CSS
                  and Next.js, providing a modern and responsive user interface.
                </p>
              </div>
            </div>
            <div className="card-link-wrapper">
              <a
                href="https://aplustudio-1js2002.vercel.app/"
                className="card-link"
              >
                Read More
              </a>
            </div>
          </li>
          <li className="card">
            <div>
              <h3 className="card-title">Google Keep Clone</h3>
              <img src="keep.png" alt="ke" />
              <div className="card-content">
                <p>
                  This project is a Google Keep clone built using React Redux.
                  It allows users to create and organize notes, set reminders,
                  and collaborate with others.
                </p>
              </div>
            </div>

            <div className="card-link-wrapper">
              <a
                href="https://keeper-project-flax.vercel.app/"
                className="card-link"
              >
                View demo
              </a>
            </div>
          </li>

          <li className="card">
            <div>
              <h3 className="card-title">QUIZEO</h3>
              <img src="quizeo.png" alt="quiz" />

              <div className="card-content">
                <p>
                  This quiz app built with React Redux and Trivia API lets users
                  test their knowledge with various categories and difficulty
                  levels while managing the application state.
                </p>
              </div>
            </div>

            <div className="card-link-wrapper">
              <a href="https://quizeo-brown.vercel.app/" className="card-link">
                View demo
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
