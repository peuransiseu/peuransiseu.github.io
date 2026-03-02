import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section id="intro" className="relative py-24 bg-secondary overflow-hidden">
      <span className="section-number opacity-50">03</span>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-4"
          >
            Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8"
          >
            Fresh Innovative Mind
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-base lg:text-lg font-body"
          >
            I am an innovative Computer Science graduate specialized in machine learning development.
            I am also an AWS Certified Solutions Architect – Associate with hands-on experience in
            developing solutions in Cloud Computing environment and Vision Transformer-based disease
            classification models, Natural Language Processing, and responsive web applications.
            Skilled in leveraging tools such as Python, Java, and AWS Bedrock for real-world applications.
            Competent at problem-solving, collaboration, and project management, honed through leadership
            roles and technical projects. Passionate about driving technological advancements and contributing
            to impactful, user-centered innovations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
