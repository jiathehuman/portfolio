import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../theme/home.module.css";
import { TextType } from "../blocks/TextAnimations/TextType/TextType";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header />
      <div className={`${styles.hero}`}>
        <TextType text="Hello" className="text-4xl" textColors={"black"} />
        <h2>Welcome to my website.</h2>
      </div>

      <div className={styles.description}>
        <h3>Brief intro.</h3>
        <p>
          I'm a trainee at Red Alpha, passionate about all things tech. With a
          background in business and computer science, I thrive in creative
          environments and love on creating solutions to business problems.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>

      <div className={styles.cta}>
        <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
          <NavLink to="/about">About Me</NavLink>
        </button>
        <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
          <NavLink to="/project">My Projects</NavLink>
        </button>
      </div>

      <div className={styles.getInTouch}>
        <h3>Get in touch</h3>
        <p>
          Feel free to reach out if you would like to collaborate, grab a coffee
          or just want to say hello! I am always open to new opportunities.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};