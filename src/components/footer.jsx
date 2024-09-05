import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <img
          src="../public/assests/stuartz.jpeg"
          className="footer-container-img"
        ></img>
        <h3 className="link-item">18K Gold Plated Long Lasting Jewelry</h3>
      </div>
      <div className="footer-links-container">
        <h2 className="footer-container-title">Quick links</h2>
        <ul className="link-list">
          <li className="link-item">
            <a href="#">Earnings</a>
          </li>
          <li className="link-item">
            <a href="#">Earnings</a>
          </li>
          <li className="link-item">
            <a href="#">Rings</a>
          </li>
          <li className="link-item">
            <a href="#">Necklace</a>
          </li>
          <li className="link-item">
            <a href="#">Bracelet</a>
          </li>
        </ul>
      </div>

      <div className="footer-links-container">
        <h2 className="footer-container-title">UseFul links</h2>
        <ul className="link-list">
          <li className="link-item">
            <a href="#">About</a>
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
            <a href="#">Contact Us</a>
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
            <a href="#">Email: accounts@alnawaya.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
