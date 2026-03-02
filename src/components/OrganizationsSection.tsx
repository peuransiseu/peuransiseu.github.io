import { motion } from "framer-motion";
import tgsLogo from "@/assets/tgs-logo-bg.jpg";
import icsscLogo from "@/assets/icssc-logo-bg.jpg";
import awsLogo from "@/assets/aws-logo.jpg";
import cnagLogo from "@/assets/cnag-logo.jpg";
import pcuLogo from "@/assets/pcushsstem-logo.jpg";
import olaLogo from "@/assets/ola-logo.jpg";

const orgs = [
  { name: "UST Thomasian Gaming Society", url: "https://www.facebook.com/ThomasianGamingSociety", img: tgsLogo },
  { name: "UST ICS Student Council", url: "https://www.facebook.com/USTICSSC", img: icsscLogo },
  { name: "AWS Learning Club - UST", url: "https://www.facebook.com/awsust/", img: awsLogo },
  { name: "UST CNAG - CICS", url: "https://facebook.com/cnagics", img: cnagLogo },
  { name: "PCU SHS STEM Society", url: "https://www.facebook.com/pcushsstemsoc", img: pcuLogo },
  { name: "OLA Supreme Student Council", url: "#", img: olaLogo },
];

const OrganizationsSection = () => {
  return (
    <section id="works" className="relative py-24 overflow-hidden">
      <span className="section-number">04</span>
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-2"
        >
          Some of my recent involvements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-12"
        >
          Organizations
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orgs.map((org, i) => (
            <motion.a
              key={i}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={org.img}
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t border-border">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {org.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
