import myimage from "/src/assets/my-photo2-no-bg.png";

const Experience = () => (
  <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 flex justify-center">
      <img
        src={myimage}
        alt="About Me"
        className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        style={{ maxHeight: 350 }}
      />
    </div>
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-300 mb-6 text-justify">
        I am an innovative Computer Science graduate specialized in machine learning development. I am also an AWS Certified Solutions Architect - Associate with hands-on experience in developing solutions in Cloud Computing environment and Vision Transformer-based disease classification models, Natural Language Processing, and responsive web applications. Skilled in leveraging tools such as Python, Java, and AWS Bedrock for real-world applications. Competent at problem-solving, collaboration, and project management, honed through leadership roles and technical projects. Passionate about driving technological advancements and contributing to impactful, user-centered innovations.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Certifications and Badges</h3>
      <div className="flex gap-4 flex-wrap">
        {/* Repeat for each badge */}
        <a href="https://www.credly.com/badges/920a2481-984f-4d20-852e-ab11294de2bf/public_url" target="_blank" rel="noopener noreferrer">
          <img src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/twitter_thumb_201604_image.png" alt="AWS Certified Solutions Architect Associate" className="w-24 h-24 object-contain hover:scale-110 transition-transform" />
        </a>
        {/* ...other badges */}
      </div>
    </div>
  </section>
);

export default Experience;