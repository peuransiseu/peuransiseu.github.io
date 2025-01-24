import { motion } from "framer-motion";
import "../Effects.css";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-md d-flex pe-5 my-5 my-0">
          <div className="col-lg-5">
            <img
              src="src\assets\my-photo2-no-bg.png"
              id="myphoto2"
              alt="mypicture"
              className="about-img img-fluid"
            />
          </div>
          <div className="col-lg-5 about-txt">
            <h1 className="me-5 mb-4">About Me</h1>
            <p className="me-5 fs-5 text-justify">
              I am an innovative Computer Science student specializing in web,
              application, and machine learning development. With hands-on
              experience in developing solutions like Vision Transformer-based
              disease classification models, Natural Language Processing, and
              responsive web applications. Skilled in leveraging tools such as
              Python, Java, and AWS Bedrock for real-world applications.
              Competent at problem-solving, collaboration, and project
              management, honed through leadership roles and technical projects.
              Passionate about driving technological advancements and
              contributing to impactful, user-centered innovations.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
