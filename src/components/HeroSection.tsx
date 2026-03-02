import { motion } from "framer-motion";
import profileImg from "@/assets/mynewpicture.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <span className="section-number">01</span>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-brand-light rounded-2xl -z-10" />
              <img
                src={profileImg}
                alt="Francis Fundal"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-4">
              Thomasian / IT Strategy Consultant
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] text-foreground">
              Francis
              <br />
              <span className="text-gradient-brand">Fundal</span>
            </h1>
            <div className="mt-8 flex gap-4">
              <a
                href="#about"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-brand-dark transition-colors"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="inline-block border border-foreground text-foreground px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
