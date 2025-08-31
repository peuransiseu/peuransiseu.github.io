import fblogo from "/src/assets/facebook-icon.svg";
import iglogo from "/src/assets/instagram-icon.svg";
import linkedin from "/src/assets/linkedin-icon.svg";

const Contact = () => (
  <footer id="contact" className="max-w-7xl mx-auto px-6 py-16 text-center">
    <h2 className="text-3xl font-bold mb-8">Contact Me!</h2>
    <div className="flex justify-center gap-6 mb-6">
      <a href="https://www.facebook.com/Fundaldesu" target="_blank" rel="noopener noreferrer">
        <img src={fblogo} alt="Facebook" className="w-10 h-10 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.instagram.com/hahafundal/" target="_blank" rel="noopener noreferrer">
        <img src={iglogo} alt="Instagram" className="w-10 h-10 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.linkedin.com/in/francisfundal/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
      </a>
    </div>
    <p className="text-gray-400">© 2024 Francis Angelo Fundal. All rights reserved.</p>
  </footer>
);

export default Contact;