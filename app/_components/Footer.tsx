import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <span className="brand-logo">SBIB</span>
          <h3 className="footer-title">Semana Brasileira de Informática Biomédica</h3>
          <p className="footer-description">24ª SBIB | 21 a 25 de setembro de 2026 | USP - UFPR</p>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/semanadaibm/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@sbib.informaticabiomedica" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/company/semanadaibm/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://web.facebook.com/semanadaibm/?_rdc=1&_rdr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="mailto:contato.sbib@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} Semana Brasileira de Informática Biomédica. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
