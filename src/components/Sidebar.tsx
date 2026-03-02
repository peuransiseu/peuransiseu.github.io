import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
import mainLogo from "@/assets/main-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Introduction", href: "#intro" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full py-8 px-6">
      <div>
        <div className="mb-10">
          <div className="inline-block bg-primary p-3 w-14">
            <img src={mainLogo} alt="FF Logo" className="w-full h-auto" />
          </div>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block py-3 text-sidebar-foreground/70 hover:text-sidebar-foreground border-b border-sidebar-border transition-colors text-sm font-body tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="space-y-4">
        <a
          href="mailto:frncsfndl.work@gmail.com"
          className="block text-sm text-sidebar-foreground/70 hover:text-primary transition-colors border-b border-sidebar-border pb-3"
        >
          frncsfndl.work@gmail.com
        </a>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/Fundaldesu" className="text-sidebar-foreground/60 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-sidebar-foreground/60 hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
          <a href="https://www.instagram.com/hahafundal/" className="text-sidebar-foreground/60 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} />
          </a>
        </div>
        <p className="text-xs text-sidebar-foreground/40 pt-2">Francis Angelo Fundal</p>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block fixed left-0 top-0 w-64 h-screen bg-sidebar z-50 overflow-y-auto">
        {sidebarContent}
      </aside>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-5 right-5 z-[60] p-2 bg-card rounded-md shadow-lg"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/50 z-[55] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 w-72 h-screen bg-sidebar z-[56] lg:hidden overflow-y-auto"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
