import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-md d-flex align-items-center justify-content-center mt-5">
          <div className="" style={{ objectFit: "cover" }}>
            <img
              src="src\assets\maintenance.png"
              id="maintenance"
              alt="maintenance"
              className="maintenance-img"
            />
          </div>
          <div className="under-maintenance">
            <h1>🚧 Under Maintenance 🚧</h1>
            <p>
              We're currently working on this page. Please check back later.
            </p>
          </div>
        </div>
      </motion.div>
    </>

    // <div className="card mb-3" style={{ maxWidth: "540px" }}>
    //   <div className="row g-0">
    //     <div className="col-md-4">
    //       <img src="..." className="img-fluid rounded-start" alt="..." />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">
    //           This is a wider card with supporting text below as a natural
    //           lead-in to additional content. This content is a little bit
    //           longer.
    //         </p>
    //         <p className="card-text">
    //           <small className="text-body-secondary">
    //             Last updated 3 mins ago
    //           </small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
