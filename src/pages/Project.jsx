import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../theme/project.module.css";
import { FaGithub } from "react-icons/fa";
import { PortfolioItems } from "../components/PortfolioItems";

export const Project = () => {
  const photos = PortfolioItems.map((image) => (
    <div key={image.imgSrc} className={styles.imgContainer}>
      <div className={styles.overlay}>
        <h3>{image.text}</h3>
        <p>
          Find out more at:
          <a href={image.url}>
            <FaGithub className="inline m-2" size={20} />
          </a>
        </p>
      </div>
      <img src={image.imgSrc} alt={image.text} />
    </div>
  ));
  return (
    <>
      <div className="mt-[3rem]">
        <Header />
        <div>
        <h1>My Projects.</h1>
        <p className="ml-[2rem]">
          If you have thought of it, I have thunk it and done it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{photos}</div>
        <Footer/>
      </div>
      </div>
    </>
  );
};