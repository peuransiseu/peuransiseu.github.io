import "../Effects.css";
import { motion } from "framer-motion";
import myimage from "/src/assets/mypicture.png";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="intro-section"
    >
      <div className="intro-container">
        <div className="name-stack">
          <h1 className="first-name">FRANCIS ANGELO</h1>
          <h1 className="last-name">FUNDAL</h1>
        </div>
        <h4 className="tagline">"Still trying to be better.."</h4>
      </div>
      <img
        src={myimage}
        className="hover-shadow full-page-image"
        alt="mypicture"
      />
    </motion.div>
  );
};

export default Intro;
