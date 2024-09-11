import { useDispatch } from "react-redux";
import "./About.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const Shipping = () => {
  const dispatch = useDispatch();

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
        <h2 className="about-us-title">Shipping & Handeling</h2>
        <h3 className="about-us-heading">Shipping</h3>
        <p className="about-us-p">
          We provide tracking numbers for all our shipments and work with
          reliable international and local carriers to ensure speedy and secure
          deliveries.
        </p>
        <p className="about-us-p">
          Once the carrier scans your package, we relinquish responsibility for
          any loss or theft. Nevertheless, if you have any questions or concerns
          about your package, don’t hesitate to contact us through our contact
          page.
        </p>
        <p className="about-us-p">
          For all packages, please note that any applicable taxes and duties are
          not included in the checkout total. Customs agencies in the
          destination country will determine these charges, and they will reach
          out to you via mail, email, or phone to facilitate payment.
          Regrettably, we have no control over these fees and cannot be held
          responsible for any additional charges.
        </p>
        <p className="about-us-p">
          In the event that a package is returned to us due to non-claim, an
          insufficient address, or failure to pay customs and duties, we will
          process a refund for your order in the form of a gift card. However,
          please be aware that a shipping fee of 50 AED will be deducted.
        </p>
        <p className="about-us-p">
          If your package is returned to us because of address issues that you
          provided, you will be responsible for covering the shipping invoice to
          facilitate the re-shipment of your package.
        </p>
      </div>
    </div>
  );
};

export const ShippingPage = () => {
  return (
    <div className="about-us-page">
      <Search />
      <Header />
      <Shipping />
      <Footer />
    </div>
  );
};
