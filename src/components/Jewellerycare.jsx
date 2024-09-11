import { useDispatch } from "react-redux";
import "./About.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const JewelleryCare = () => {
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
        <h2 className="about-us-title">Jewellery Care</h2>
        <h3 className="about-us-heading">Recommendations</h3>
        <p className="about-us-p">
          We recommend three simple guidelines so you can treasure your
          jewellery for many years to come:
        </p>
        <ul>
          <li className="about-us-p">
            Remove at the end of the day: one of the simplest and most important
            care steps you can take, is to ensure your jewellery is the last
            thing you put on before you leave home each day and the first thing
            you take off.
          </li>
          <li className="about-us-p">
            Clean regularly: we offer complimentary, professional cleaning
            in-store, so we invite you to bring your pieces in as needed. For
            regular touch-ups, our convenient jewellery cleaning kits are also
            available.
          </li>
          <li className="about-us-p">
            Store safely: ensure your jewellery is clean and dry before storing
            in a safe place such as a fabric-lined jewellery box or pouch. Store
            your pieces in separate compartments to avoid potential scratches or
            tangles.
          </li>
        </ul>
        <p className="about-us-p">
          Discover our detailed guide below to caring for your various types of
          fine jewellery.
        </p>
        <p className="about-us-p">
          For particularly special pieces, consider purchasing one of our
          Professional Care Plans for complete jewellry care.
        </p>
      </div>
    </div>
  );
};

export const JewelleryCarePage = () => {
  return (
    <div className="about-us-page">
      <Search />
      <Header />
      <JewelleryCare />
      <Footer />
    </div>
  );
};
