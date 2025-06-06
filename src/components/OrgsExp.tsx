import { motion } from "framer-motion";
import tgs from "/src/assets/tgs-logo-bg.jpg";
import icssc from "/src/assets/icssc-logo-bg.jpg";
import awslc from "/src/assets/awslc-logo.png";
import cnag from "/src/assets/cnag-logo.jpg";
import pcustem from "/src/assets/pcushsstem-logo.jpg";
import olassc from "/src/assets/ola-logo.jpg";

const OrgsExp = () => {
  return (
    <>
      <h1 className="section-header">Organizational Involvements</h1>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="container d-flex flex-column reduce-scale  align-items-center org-adjust"
          // style={orgStyle}
        >
          {/* <h1>Organizational Affiliations</h1> */}
          <div className="row row-cols-1 row-cols-md-3 g-4 w-100 mb-0 p-0">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/ThomasianGamingSociety">
                  <img
                    src={tgs}
                    className="card-img-top logo-hover img-fluid"
                    alt="tgs-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <strong className="card-title d-flex fs-4 justify-content-center">
                    UST Thomasian Gaming Society
                  </strong>
                  <p></p>
                  <ul className="card-text fs-5 mt-3 ">
                    <li>
                      Executive Vice President and Chief Relations Director
                    </li>
                    <p>(A.Y 2024-2025)</p>
                    <li>
                      Executive Coordinator to the Vice President and Chief
                      Relations Director
                    </li>
                    <p>(A.Y 2023-2024)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/USTICSSC">
                  <img
                    src={icssc}
                    className="card-img-top logo-hover img-fluid"
                    alt="icssc-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <strong className="card-title fs-4 d-flex justify-content-center">
                    UST ICS Student Council
                  </strong>
                  <ul className="card-text fs-5 mt-3">
                    <li>Director for Projects Management </li>
                    <p>(A.Y 2024-2025)</p>
                    <li>Executive Associate to the Internal Vice President</li>
                    <p>(A.Y 2023-2024)</p>
                    <li>Executive Associate to the President </li>
                    <p>(A.Y 2022-2023)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://facebook.com/people/AWS-Learning-Club-Espa%C3%B1a/61563942550637/">
                  <img
                    src={awslc}
                    className="card-img-top logo-hover img-fluid"
                    alt="awslc-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <strong className="card-title  d-flex fs-4 justify-content-center">
                    AWS Learning Club - España
                  </strong>
                  <ul className="fs-5 mt-3">
                    <li>Chief Operations Officer</li>
                    <p>(2024 - Present)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://facebook.com/cnagics">
                  <img
                    src={cnag}
                    className="card-img-top logo-hover img-fluid"
                    alt="cnag-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <strong className="card-title  d-flex fs-4 justify-content-center">
                    UST Cisco Networking Academy Gateway - CICS
                  </strong>
                  <ul className="fs-5 mt-3">
                    <li>External Relations Staff</li>
                    <p>(A.Y 2023-2024)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/pcushsstemsoc">
                  <img
                    src={pcustem}
                    className="card-img-top logo-hover img-fluid"
                    alt="pcushsstem-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <strong className="card-title  d-flex fs-4 justify-content-center">
                    PCU SHS STEM Society
                  </strong>
                  <ul className="fs-5 mt-3">
                    <li>Executive Treasurer </li>
                    <p>(A.Y 2019 - 2020)</p>
                    <li>CRTV Media - Videographer</li>
                    <p>(A.Y 2018 - 2019)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/olassc">
                  <img
                    src={olassc}
                    className="card-img-top logo-hover img-fluid"
                    alt="ola-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <strong className="card-title d-flex fs-4 justify-content-center">
                    Oxford Louise Academy, Supreme Student Council
                  </strong>
                  <ul className="fs-5 mt-3">
                    <li>President</li>
                    <p>(A.Y 2017 - 2018)</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OrgsExp;
