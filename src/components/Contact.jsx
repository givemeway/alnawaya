import { useDispatch, useSelector } from "react-redux";
import "./Contact.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const Contact = () => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.tabSelection);

  useEffect(() => {
    dispatch(
      setTabSelection({
        earnings: false,
        rings: false,
        necklace: false,
        bracelet: false,
        about: false,
        contact: true,
      })
    );
  }, []);

  return (
    <div className="contact-body">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-row">
          <input
            name="name"
            placeholder="Name"
            type="text"
            className="contact-input"
          ></input>
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="contact-input"
          ></input>
        </div>
        <div className="contact-row">
          <input
            name="phone"
            placeholder="Phone Number"
            type={"tel"}
            className="contact-input"
          ></input>
        </div>
        <div className="contact-row">
          <textarea
            name="comments"
            placeholder="Write Your Comment"
            className="contact-message"
          ></textarea>
        </div>
        <div className="contact-row">
          <button className="contact-btn">Send Message</button>
        </div>
      </div>
      <div className="contact-us-info">
        <h2 className="contact-info-title">Contact Info</h2>
        <p style={{ marginTop: "1rem" }}>
          Enquiries and business-related questions:
        </p>
        <strong>sales@alnawaya.com</strong>
        <p style={{ marginTop: "1rem" }}>Accounts support:</p>
        <strong>accounts@alnawaya.com</strong>
        <p style={{ marginTop: "1rem" }}>Al Nawaya Trading FZC LLC</p>
        <p>Al Sharjah, UAE</p>
      </div>
    </div>
  );
};

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <Search />
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};
