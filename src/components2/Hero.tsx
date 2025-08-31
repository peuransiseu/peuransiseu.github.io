import myimage from "/src/assets/mypicture.png";

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        FRANCIS ANGELO FUNDAL
      </h1>
      <h2 className="text-2xl font-light mb-6 text-gray-300">
        "Still trying to be better.."
      </h2>
      <p className="text-lg text-gray-400 max-w-xl">
        Computer Science graduate, Machine Learning Developer, AWS Certified Solutions Architect, and Cloud/AI Enthusiast.
      </p>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={myimage}
        alt="Francis Angelo Fundal"
        className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        style={{ maxHeight: 350 }}
      />
    </div>
  </section>
);

export default Hero;