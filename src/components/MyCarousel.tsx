// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";

const MyCarousel = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="position-relative">
          <div className="container-fluid w-75 position-absolute top-100 start-50 translate-middle-x">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide w-75  "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card">
                    <div className="card-header">Machine Learning</div>
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p>Natural Language Processing:</p>
                        <footer className="blockquote-footer">
                          Spearheaded a paper project for Tagalog Language
                          Safety Evaluation using DistilmBERT, mBERT-base, and
                          XLM-RoBERTa. Fine-tuned pre-trained models and
                          benchmarked results with LLaMa-3.3-70B, achieving
                          0.53% Attack Success Rate with our Tagalog Prompt
                          Shield
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="card-header">Quote 2</div>
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p>
                          A well-known quote, contained in a blockquote element.
                        </p>
                        <footer className="blockquote-footer">
                          Someone famous in{" "}
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="card-header">Quote 3</div>
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p>
                          A well-known quote, contained in a blockquote element.
                        </p>
                        <footer className="blockquote-footer">
                          Someone famous in{" "}
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyCarousel;
