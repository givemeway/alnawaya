import { useDispatch } from "react-redux";
import "./About.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const Return = () => {
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
        <h2 className="about-us-title">Return Policy</h2>
        <h3 className="about-us-heading">
          Returns, Refunds, Cancellations, and Exchanges
        </h3>

        <ul>
          <li className="about-us-p">
            <p className="about-us-p">
              Customers can return their order within 15 days after the order
              has been delivered. Please note that only unused and undamaged
              products, with all their labels and tags completely intact, in
              original packaging, and eligible for return, can be returned. In
              case you have purchased a Stuartz product from anywhere other than
              the Al Nawaya website, the return policy of the source will apply.
            </p>
          </li>
          <li className="about-us-p">
            <p className="about-us-p">
              To request a return/replacement, please email to
              <strong> sales@alnawaya.com </strong>, we will raise a ticket
              under the return/replacement for you to keep track of it.
            </p>
          </li>
          <li className="about-us-p">
            <p className="about-us-p">
              We have a reverse pick-up facility for most cities with UAE. For
              cities that are non-serviceable by our courier partners, you will
              have to self-ship the product(s). Shipping costs up to AED 25 will
              be refunded to your original source of payment/bank account.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ReturnPage = () => {
  return (
    <div className="about-us-page">
      <Search />
      <Header />
      <Return />
      <Footer />
    </div>
  );
};
