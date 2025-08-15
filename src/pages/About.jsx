import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../theme/about.module.css";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";
import avatar from "../assets/avatar.jpg";

export const About = () => {
  return (
    <>
      <Header />
      <div className="mt-[3rem]">
        <h1>About me.</h1>
        <div className={styles.profileCard}>
          <ProfileCard
            className={`z-0 ${styles.card}`}
            handle="jiathehuman"
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatar}
            showUserInfo={true}
            innerGradient={"none"}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>

        <div className={styles.info}>
          <h3>Mixing creativity with practicality</h3>
          <p>
            I am a final-year Computer Science student at Goldsmiths, University
            of London. Before pursuing my technical path, I earned a diploma in
            International Business. This combination of business insight and
            technical expertise allows me to approach software development with
            both a problem-solving mindset and a clear understanding of how
            technology drives value in the real world.
          </p>
        </div>
        <div className={styles.info}>
          <h3>Tech Background</h3>
          <p>
            My <a href="">GitHub</a> portfolio showcases a range of projects
            that span both front-end and back-end technologies. I’ve developed
            RESTful APIs for a crime dataset using Django and built a blogging
            application with Express, Node.js, EJS, and SQLite. Beyond web
            development, I’ve also explored machine learning and AI deployment.
          </p>
        </div>
        <div className={styles.info}>
          <h3>Work Experience</h3>
          <div>
            <table className={`w-full experienceTable`}>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Company</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aug 2023 - March 2024</td>
                  <td>HeartBid.sg</td>
                  <td>Partnerships Intern</td>
                </tr>
                <tr>
                  <td>July 2022 - Sep 2022</td>
                  <td>SIM Student Development</td>
                  <td>Intern</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};