import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Contact.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
import emailjs from "@emailjs/browser";
import { SuccessIcon } from "./icons/SuccessIcon";
import { CloseIcon } from "./icons/CloseIcon";

export const Contact = () => {
  const dispatch = useDispatch();
  const [sending, setSending] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.target;
    setSending(true);
    emailjs
      .sendForm("service_bfxxfo6", "template_aft5mfo", form)
      .then((result) => {
        console.log(result);
        setSending(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    console.log(
      form.email.value,
      form.from_name.value,
      form.phone.value,
      form.message.value
    );
  };

  useEffect(() => {
    emailjs.init("nvElSF8oZRlswxZhm");
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
      {isFormSubmitted && (
        <div
          className="contact-container"
          style={{
            border: "1px solid #e2c5b7",
            padding: "1rem",
            background: "whitesmoke",
            borderRadius: "5px",
            gap: 0,
            position: "relative",
          }}
        >
          <div className="submit-success-container">
            <h2 className="submit-success-heading">Message Received </h2>-
            <SuccessIcon style={{ height: "100%", width: 25 }} />
          </div>
          <p className="submit-message">
            We will revert to your e-mail [{form.email}] once Order Id and
            e-mail is confirmed
          </p>
          <CloseIcon
            className={"close-icon"}
            style={{ height: 25, width: 25 }}
            onClick={() => setIsFormSubmitted(false)}
          />
        </div>
      )}
      {!isFormSubmitted && (
        <form className="contact-container" onSubmit={handleSubmit}>
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-row">
            <input
              name="from_name"
              placeholder="Name"
              type="text"
              className="contact-input"
              value={form.from_name}
              onChange={handleChange}
            ></input>
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="contact-input"
              value={form.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="contact-row">
            <input
              name="phone"
              placeholder="Phone Number"
              type={"tel"}
              className="contact-input"
              value={form.phone}
              onChange={handleChange}
            ></input>
          </div>
          <div className="contact-row">
            <textarea
              name="message"
              placeholder="Write Your Comment"
              className="contact-message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="contact-row">
            <button className="contact-btn" type={"submit"}>
              {!sending && <>Send Message</>}
              {sending && <>Sending...</>}
            </button>
          </div>
        </form>
      )}
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
