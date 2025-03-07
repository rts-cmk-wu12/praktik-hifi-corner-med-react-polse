import "~style/footer.scss";
import { WorldPay, Visa, MasterCard, Jcb, PayPal } from "../GetIcons";
import { Facebook, Youtube, Twitter, Instagram } from "../GetIcons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-left">
          <address>
            Hi-Fi Corner
            <br />
            2 Joppa Road, EH15 2EU, Edinburgh
            <br />
            44 Cow Wynd, FK1 1PU, Falkirk
          </address>

          <nav className="footer__links">
            <Link to="/returns-refunds" className="footer__link">
              Returns & Refunds
            </Link>
            <span className="footer__separator"> | </span>
            <Link to="/privacy-policy" className="footer__link">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="footer__container-right">
          <div className="footer__payments">
            <WorldPay className="footer__payment-icon" />
            <Visa className="footer__payment-icon" />
            <MasterCard className="footer__payment-icon" />
            <Jcb className="footer__payment-icon" />
            <PayPal className="footer__payment-icon" />
          </div>

          <nav className="footer__socials">
            <ul className="footer__social-list">
              <li>
                <a
                  href="https://www.facebook.com/HiFiCorner"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCY21Dx3ibHem-kL3G0hmOmQ"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/hifi_corner"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hifi_corner/"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
