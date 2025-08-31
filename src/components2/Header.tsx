import mylogoFAF from "/src/assets/FAF_nobg.png";

interface HeaderProps {
  onProjects: () => void;
  onContact: () => void;
  onAbout: () => void;
  onOrgs: () => void;
}

const Header = ({ onProjects, onContact, onAbout, onOrgs }: HeaderProps) => (
  <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
    <div className="flex items-center gap-2">
      <img src={mylogoFAF} alt="Logo" className="w-10 h-10 rounded-full" />
      <span className="font-bold text-xl text-white">FAF</span>
    </div>
    <nav className="flex items-center space-x-8">
      <button onClick={onAbout} className="nav-btn">About</button>
      <button onClick={onProjects} className="nav-btn">Projects</button>
      <button onClick={onOrgs} className="nav-btn">Organizations</button>
      <button onClick={onContact} className="nav-btn">Contact</button>
    </nav>
  </header>
);

export default Header;