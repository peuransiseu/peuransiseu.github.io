import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const educationData = [
  { period: "2020 – 2025", title: "BS Computer Science", place: "University of Santo Tomas" },
  { period: "2018 – 2020", title: "STEM Strand", place: "Philippine Christian University – Dasmariñas" },
];

const experienceData = [
  { period: "2025 – Present", title: "IT Strategy Consulting, Associate", place: "Kyndryl" },
  { period: "2025", title: "Cloud Engineering Intern", place: "Computrade Technology Philippines" },
];

const certifications = [
  { date: "April 16, 2025", title: "AWS Certified Solutions Architect – Associate" },
];

const badges = [
  { img: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/twitter_thumb_201604_image.png", url: "https://www.credly.com/badges/920a2481-984f-4d20-852e-ab11294de2bf/public_url", alt: "AWS Solutions Architect" },
  { img: "https://images.credly.com/size/680x680/images/7cf036b0-c609-4378-a7be-9969e1dea7ab/blob", url: "https://www.credly.com/badges/0881cdd4-9e29-4f76-a3ef-b9a4fef817ae/public_url", alt: "Cloud Essentials" },
  { img: "https://images.credly.com/size/340x340/images/519a6dba-f145-4c1a-85a2-1d173d6898d9/image.png", url: "https://www.credly.com/badges/d28e1204-7f5c-4786-8549-e18c80f3dbaf/public_url", alt: "Architecting" },
  { img: "https://images.credly.com/size/680x680/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob", url: "https://www.credly.com/badges/481496c1-bbda-42a7-aa21-375b7ccc7744/public_url", alt: "Cloud Quest" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <span className="section-number">02</span>
      <div className="container mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-2"
        >
          Biodata
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Education
            </motion.h2>
            <div className="space-y-6">
              {educationData.map((item, i) => (
                <motion.div key={i} custom={i + 2} variants={fadeUp} className="border-l-2 border-primary pl-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-body font-medium">{item.period}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.place}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Experience
            </motion.h2>
            <div className="space-y-6">
              {experienceData.map((item, i) => (
                <motion.div key={i} custom={i + 2} variants={fadeUp} className="border-l-2 border-primary pl-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-body font-medium">{item.period}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.place}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Certifications
            </motion.h2>
            <div className="space-y-6">
              {certifications.map((item, i) => (
                <motion.div key={i} custom={i + 2} variants={fadeUp} className="border-l-2 border-primary pl-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-body font-medium">{item.date}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Badges
            </motion.h2>
            <motion.div custom={2} variants={fadeUp} className="grid grid-cols-4 gap-4">
              {badges.map((badge, i) => (
                <a
                  key={i}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <img src={badge.img} alt={badge.alt} className="w-full h-auto" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
