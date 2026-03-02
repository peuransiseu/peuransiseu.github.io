import { motion } from "framer-motion";
import { Linkedin, Mail, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 bg-secondary overflow-hidden">
      <span className="section-number opacity-50">05</span>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-4"
          >
            Personal Info
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Connect With Me!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg font-body mb-10"
          >
            If you have any questions, feel free to contact me through my social media platforms or send an email.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/francisfundal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-brand-dark transition-colors rounded-lg"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="mailto:frncsfndl.work@gmail.com"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors rounded-lg"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://www.facebook.com/Fundaldesu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors rounded-lg"
            >
              <Facebook size={18} />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hahafundal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors rounded-lg"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
