import { useDispatch } from "react-redux";
import { useState } from "react";
import "./About.css";
import "./Exchange.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const Return = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ orderId: "", email: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.orderId.value, e.target.email.value);
    console.log("handle submit");
  };

  useEffect(() => {
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
      <div className="about-us-container">
        <h2 className="about-us-title">Return/Exchange Request Form</h2>
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
              Submit
            </button>
          </div>
        </form>
      </div>
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
