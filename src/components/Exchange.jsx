import { useDispatch } from "react-redux";
import { useState } from "react";
import "./About.css";
import "./Exchange.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
import emailjs from "@emailjs/browser";
import { Message } from "./Message";

export const Return = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ orderId: "", email: "" });
  const [sending, setSending] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.orderId.value, e.target.email.value);
    console.log("handle submit");
    setSending(true);
    emailjs
      .sendForm("service_5qz1sd6", "template_ppfw9nf", e.target)
      .then((result) => {
        setSending(false);
        setIsFormSubmitted(true);
        console.log(result);
      })
      .catch((err) => {
        setIsFormSubmitted(false);
        console.log(err);
      });
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
        contact: false,
      })
    );
  }, []);

  return (
    <div className="about-us-body">
      {isFormSubmitted && (
        <Message
          msg={`We will revert to [${form.email}] once Order ID [${form.orderId}] and E-mail is confirmed`}
          heading={"Request Received"}
          onClick={() => setIsFormSubmitted(false)}
        />
      )}
      {!isFormSubmitted && (
        <div className="about-us-container">
          <h3 className="about-us-heading" style={{ textAlign: "left" }}>
            Return/Exchange Request Form
          </h3>
          <form onSubmit={handleSubmit} className="exchange-form-container">
            <div className="exchange-field-container">
              <label className="exchange-label">Enter Order Id</label>
              <input
                type="text"
                name="orderId"
                onChange={handleChange}
                value={form.orderId}
              />
            </div>
            <div className="exchange-field-container">
              <label className="exchange-label">Enter Order Email</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className="exchange-field-container">
              <button className="exchange-btn" type={"submit"}>
                {!sending && <>Submit</>}
                {sending && <>Sending...</>}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export const ExchangePage = () => {
  return (
    <div className="about-us-page">
      <Search />
      <Header />
      <Return />
      <Footer />
    </div>
  );
};
