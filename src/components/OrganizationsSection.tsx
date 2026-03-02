import { motion } from "framer-motion";

const orgs = [
  { name: "UST Thomasian Gaming Society", url: "https://www.facebook.com/ThomasianGamingSociety", color: "bg-charcoal" },
  { name: "UST ICS Student Council", url: "https://www.facebook.com/USTICSSC", color: "bg-primary" },
  { name: "AWS Learning Club - UST", url: "https://www.facebook.com/awsust/", color: "bg-charcoal" },
  { name: "UST CNAG - CICS", url: "https://facebook.com/cnagics", color: "bg-primary" },
  { name: "PCU SHS STEM Society", url: "https://www.facebook.com/pcushsstemsoc", color: "bg-charcoal" },
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
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-1 h-full ${i % 2 === 0 ? 'bg-primary' : 'bg-foreground'} group-hover:w-2 transition-all duration-300`} />
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${i % 2 === 0 ? 'bg-coral-light text-primary' : 'bg-muted text-foreground'} flex items-center justify-center font-display font-bold text-lg`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
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
