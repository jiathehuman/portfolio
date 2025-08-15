import React from "react";
import LetterGlitch from "../blocks/Backgrounds/LetterGlitch/LetterGlitch";
import { Header } from "../components/Header";
import styles from "../theme/notFound.module.css";
import { createPortal } from "react-dom";

export const NotFound = () => {
  
  return (
    <>
      <Header />
      <div className={styles.background}>
        <LetterGlitch
          glitchSpeed={25}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        {createPortal(
        <>
          <div className={styles.content}>
            <h1>Invalid page. Check the url please? 😊</h1>
          </div>
        </>,
        document.body )}
      </div>
    </>
  );
};
