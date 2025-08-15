import React, { useState } from "react";
import { Header } from "../components/Header";
import styles from "../theme/contact.module.css";
import { TextType } from "../blocks/TextAnimations/TextType/TextType";
import { Footer } from "../components/Footer";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const Contact = () => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello ${input.name}! I will be in touch with you at ${input.email} soon!`
    );
    setInput({});
  };
  return (
    <>
      <Header />
      <div className={styles.formContainer}>
        <TextType
          text="Contact Me"
          className="text-4xl"
          textColors={"black"}
          showCursor={false}
        />
        <p>Get in touch with me! I swear I am friendly.</p>
        <div>
          <form onSubmit={handleSubmit}>
            <h3>FORM</h3>
            <fieldset>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={input.name || ""}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={input.email || ""}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <label>Message</label>
              <textarea
                name="message"
                value={input.message || ""}
                onChange={handleChange}
              ></textarea>
            </fieldset>
            <button
              type="submit"
              className="mt-3 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div id="social-media" className={styles.socialMedia}>
          <a href="https://github.com/jiathehuman"><span><FaGithubSquare size={"1.5rem"}/>Github</span></a>
          <a href="https://www.linkedin.com/in/teo-jiaen/"><span><FaLinkedin size={"1.5rem"}/> LinkedIn</span></a>
        </div>
      </div>
      <Footer />
    </>
  );
};
