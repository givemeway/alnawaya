import { Link } from "react-router-dom";
import "./footer.css";
import { DownIcon } from "./icons/DownIcon";
import { useState } from "react";

export const Footer = () => {
  const [expand, setExpand] = useState({
    quickLinks: false,
    usefulLinks: false,
    terms: false,
    contact: false,
  });

  const [rotate, setRotate] = useState({
    quickLinks: false,
    usefulLinks: false,
    terms: false,
    contact: false,
  });
  const handleExpand = (module) => {
    if (module === "QUICKLINKS") {
      setExpand((prev) => ({ ...prev, quickLinks: !prev.quickLinks }));
    } else if (module === "USEFULLINKS") {
      setExpand((prev) => ({ ...prev, usefulLinks: !prev.usefulLinks }));
    } else if (module === "TERMS") {
      setExpand((prev) => ({ ...prev, terms: !prev.terms }));
    } else if (module === "HELP") {
      setExpand((prev) => ({ ...prev, contact: !prev.contact }));
    }
  };
  return (
    <div className="footer">
      <div className="footer-links-container">
        <img
          src="../../assets/stuartz-brown.png"
          className="footer-container-img"
        ></img>
        <h3
          className="link-item"
          style={{ margin: 0, width: "100%", textAlign: "center" }}
        >
          14K & 18K Gold Plated Jewelry
        </h3>
      </div>
      <div className="footer-links-container">
        <h2 className="footer-container-title">
          Quick links
          <DownIcon
            className={`footer-expand-icon ${
              expand.quickLinks ? "rotate" : ""
            }`}
            onClick={() => handleExpand("QUICKLINKS")}
          />
        </h2>
        <ul
          className={`link-list ${expand.quickLinks ? "list-expand" : ""}`}
          // style={{
          //   height: `${expand.quickLinks ? "120px" : "0px"}`,
          //   transition: "height 200ms ease-in-out",
          //   visibility: "visible",
          // }}
        >
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
        <h2 className="footer-container-title">
          UseFul links
          <DownIcon
            className={"footer-expand-icon"}
            onClick={() => handleExpand("USEFULLINKS")}
          />
        </h2>
        <ul className={`link-list ${expand.usefulLinks ? "list-expand" : ""}`}>
          <li className="link-item">
            <Link to={"/about-us"}>About</Link>
          </li>
          <li className="link-item">
            <Link to={"/jewelry-care"}>Jewelry & Care</Link>
          </li>
          <li className="link-item">
            <a href="#">Order Tracking</a>
          </li>
          <li className="link-item">
            <Link to={"/request-form"}>Return / Exchange</Link>
          </li>
          <li className="link-item">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-links-container">
        <h2 className="footer-container-title">
          Terms & Policy
          <DownIcon
            className={"footer-expand-icon"}
            onClick={() => handleExpand("TERMS")}
          />
        </h2>
        <ul className={`link-list ${expand.terms ? "list-expand" : ""}`}>
          <li className="link-item">
            <Link to={"/shipping-handeling"}>Shipping Policy</Link>
          </li>
          <li className="link-item">
            <Link to={"/terms-conditions"}>Terms & Conditions</Link>
          </li>
          <li className="link-item">
            <Link to={"/privacy-policy"}>Privacy & Policy</Link>
          </li>
          <li className="link-item">
            <Link to={"/refund-return"}>Return & Refund Policy</Link>
          </li>
        </ul>
      </div>
      <div className="footer-links-container">
        <h2 className="footer-container-title">
          Contact Info
          <DownIcon
            className={"footer-expand-icon"}
            onClick={() => handleExpand("HELP")}
          />
        </h2>
        <ul className={`link-list ${expand.contact ? "list-expand" : ""}`}>
          <li className="link-item">
            <a href="#">Need Any Help?</a>
          </li>
          <li className="link-item">
            <a href="#">Email: sales@alnawaya.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
