import { useDispatch } from "react-redux";
import "./About.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const Terms = () => {
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
        <h2 className="about-us-title">Terms &amp; Conditions</h2>
        <h3 className="about-us-heading">Welcome to Al Nawaya</h3>
        <p className="about-us-p">
          By accessing this website, you agree to be bound by the following
          terms and conditions:
        </p>
        <ol>
          <li className="about-us-p">
            Acceptance of Terms By accessing Alnawaya.com, you accept and agree
            to these terms and conditions. If you do not agree to be bound by
            these terms, please do not use this website.
          </li>
          <li className="about-us-p">
            Use of Website The website alnawaya.com and its related services are
            provided for personal use only. Any commercial use is strictly
            prohibited without express written consent from the website owner.
          </li>
          <li className="about-us-p">
            Content Ownership All content on alnawaya.com is owned by the
            website owner. This includes, but is not limited to, text, logos,
            documents, graphics, images, software, and services. You may not
            modify, copy, distribute, transmit, display, reproduce, publish,
            license, transfer, sell, create derivative works from, or use any
            content without express written consent from the website owner.
          </li>
          <li className="about-us-p">
            Privacy Any personal information you provide to alnawaya.com is
            governed by our Privacy Policy. Please review the Privacy Policy
            before using this website.
          </li>
          <li className="about-us-p">
            Disclaimer alnawaya.com provides content on an “as is” and “as
            available” basis. While we try to keep our information up-to-date
            and correct, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability,
            suitability, or availability with respect to the website or related
            services. Any reliance you place on such information is therefore
            strictly at your own risk. Alnawaya.com disclaims any and all
            liability for loss or damage arising out of use of the website.
          </li>
          <li className="about-us-p">
            Changes alnawaya.com reserves the right to modify these terms at any
            time. Please review these terms regularly to ensure you are aware of
            any changes. Your continued use of this website after changes are
            posted constitutes your agreement to the modified terms.
          </li>
          <li className="about-us-p">
            Contact If you have any questions about these terms and conditions,
            please contact us at <strong>sales@Alnawaya.com</strong>.
          </li>
        </ol>
      </div>
    </div>
  );
};

export const TermsPage = () => {
  return (
    <div className="about-us-page">
      <Search />
      <Header />
      <Terms />
      <Footer />
    </div>
  );
};
