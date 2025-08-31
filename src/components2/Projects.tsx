const Projects = () => (
  <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example Project Card */}
      <div className="card bg-[#28292a] rounded-lg p-6 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
        <ul className="text-gray-300 list-disc ml-5">
          <li>Natural Language Processing: Tagalog Language Safety Evaluation using DistilmBERT, mBERT-base, and XLM-RoBERTa.</li>
          <li>Computer Vision: Papaya Disease Classification using Vision Transformer-based GANs.</li>
        </ul>
      </div>
      {/* ...other project cards */}
    </div>
  </section>
);

export default Projects;