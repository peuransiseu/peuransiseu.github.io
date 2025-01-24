import "../Effects.css";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="intro-container ms-5 ps-5">
          <h1>Hi! My name is</h1>
          <h1 style={{ fontSize: "75px" }}>Francis Angelo Fundal</h1>
          <h4>Computer Science</h4>
          <h4>University of Santo Tomas</h4>
          <div className="mt-3 me-3">
            <a href="https://www.facebook.com/Fundaldesu">
              <img
                src="src\assets\facebook-icon.svg"
                alt="fb-icon"
                style={{ maxWidth: "30%" }}
                className="logo-hover"
              />
            </a>
            <a href="https://www.instagram.com/hahafundal/">
              <img
                src="src\assets\instagram-icon.svg"
                alt="ig-icon"
                style={{ maxWidth: "30%" }}
                className="logo-hover"
              />
            </a>

            <a href="https://www.linkedin.com/in/francisfundal/">
              <img
                src="src\assets\linkedin-icon.svg"
                alt="linkedin-icon"
                style={{ maxWidth: "30%" }}
                className="logo-hover"
              />
            </a>
          </div>
        </div>
        <img
          src="src\assets\mypicture.png"
          className="hover-shadow full-page-image"
          alt="mypicture"
        />
      </motion.div>
    </>
  );
};

export default Intro;
