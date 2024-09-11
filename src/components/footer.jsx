import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <img
          src="../../assets/stuartz-brown.png"
          className="footer-container-img"
        ></img>
        <h3 className="link-item">14K & 18K Gold Plated Jewelry</h3>
      </div>
      <div className="footer-links-container">
        <h2 className="footer-container-title">Quick links</h2>
        <ul className="link-list">
          <li className="link-item">
            <Link to={"/product-category/earrings"}>Earnings</Link>
          </li>
          <li className="link-item">
            <Link to={"/product-category/anklets"}>Anklets</Link>
          </li>
          <li className="link-item">
            <Link to={"/product-category/necklace"}>Necklace</Link>
          </li>
          <li className="link-item">
            <Link to={"/product-category/bracelets"}>Bracelet</Link>
          </li>
        </ul>
      </div>

      <div className="footer-links-container">
        <h2 className="footer-container-title">UseFul links</h2>
        <ul className="link-list">
          <li className="link-item">
            <Link to={"/about-us"}>About</Link>
          </li>
          <li className="link-item">
            <a href="#">FAQs</a>
          </li>
          <li className="link-item">
            <a href="#">Ring Size Guide</a>
          </li>
          <li className="link-item">
            <a href="#">Jewelry & Care</a>
          </li>
          <li className="link-item">
            <a href="#">Order Tracking</a>
          </li>
          <li className="link-item">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-links-container">
        <h2 className="footer-container-title">Terms & Policy</h2>
        <ul className="link-list">
          <li className="link-item">
            <a href="#">Shipping Policy</a>
          </li>
          <li className="link-item">
            <a href="#">Terms & Conditions</a>
          </li>
          <li className="link-item">
            <a href="#">Privacy & Policy</a>
          </li>
          <li className="link-item">
            <a href="#">Return & Refund Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-links-container">
        <h2 className="footer-container-title">Contact Info</h2>
        <ul className="link-list">
          <li className="link-item">
            <a href="#">Need Any Help?</a>
          </li>
          {/* <li className="link-item">
            <a href="#">Phone #</a>
          </li> */}
          <li className="link-item">
            <a href="#">Email: sales@alnawaya.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
