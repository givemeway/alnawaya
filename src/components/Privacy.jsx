import { useDispatch } from "react-redux";
import "./About.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const Privacy = () => {
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
        <h2 className="about-us-title">Privacy Policy</h2>
        <h3 className="about-us-heading">Privacy Policy</h3>

        <ol>
          <li className="about-us-p">
            Information Handling
            <p className="about-us-p">
              When you make a purchase from our store, we collect personal
              information such as your name, address, and email address as part
              of the buying and selling process.
            </p>
            <p className="about-us-p">
              While browsing our store, we automatically receive your computer’s
              internet protocol (IP) address, which helps us understand your
              browser and operating system for better service.
            </p>
            <p className="about-us-p">
              Email Marketing: With your consent, we may send you emails
              regarding our store, new products, and updates.
            </p>
          </li>
          <li className="about-us-p">
            Consent.
            <p className="about-us-p">
              Your consent is obtained when you provide personal information to
              complete a transaction, verify your credit card, place an order,
              arrange delivery, or process a return. We use the information
              solely for the intended purpose.
            </p>
            <p className="about-us-p">
              For any secondary purpose, like marketing, we will seek your
              direct consent or provide an option to decline.
            </p>
            <p className="about-us-p">
              You can withdraw your consent anytime by contacting us at{" "}
              <strong>sales@alnawaya.com</strong>.
            </p>
          </li>
          <li className="about-us-p">
            <p className="about-us-p">Disclosure</p>
            <p className="about-us-p">
              We may disclose your personal information if required by law or in
              the event of a violation of our Terms of Service.
            </p>
          </li>
          <li className="about-us-p">
            <p className="about-us-p">Security</p>
            <p className="about-us-p">
              We prioritize the protection of your personal information and
              implement reasonable precautions and industry best practices to
              prevent any inappropriate loss, misuse, unauthorized access,
              disclosure, alteration, or destruction.
            </p>
          </li>
          <li className="about-us-p">
            <p className="about-us-p">Cookies</p>
            <p className="about-us-p">
              As part of our commitment to providing personalized services on
              our website, we utilize cookies to store and occasionally track
              information about you. A cookie is a small data file sent from a
              web server to your browser and stored on your hard drive,
              facilitating easier access the next time you visit the same page.
            </p>
          </li>
          <li className="about-us-p">
            <p className="about-us-p">Age of Consent</p>
            <p className="about-us-p">
              By using this site, you confirm that you are of the age of
              majority in your state or province or have given consent for any
              minor dependents to use the site.
            </p>
          </li>
        </ol>
        <p className="about-us-p">Changes to Privacy Policy</p>
        <p className="about-us-p">
          We retain the right to make modifications to this privacy policy at
          any time, and we encourage you to review it regularly. Upon posting
          any changes and clarifications on our website, they will become
          immediately effective. In the event of significant changes to this
          policy, we will provide notification here, ensuring you stay informed
          about the information we collect, its usage, and under what
          circumstances, if any, we may disclose it.
        </p>
        <p className="about-us-p">
          In the event of an acquisition or merger with another company, your
          information may be transferred to the new owners, allowing us to
          continue providing products and services to you.
        </p>
        <p className="about-us-p">Questions and Contact Information</p>
        <p className="about-us-p">
          If you wish to access, correct, amend, or delete any personal
          information we have about you, register a complaint, or seek further
          information, please feel free to reach out to our Al Nawaya team at {" "}
          <strong>sales@alnawaya.com</strong>.
        </p>
        <p className="about-us-p">
          We are here to assist you with any inquiries or concerns you may have.
        </p>
      </div>
    </div>
  );
};

export const PrivacyPage = () => {
  return (
    <div className="about-us-page">
      <Search />
      <Header />
      <Privacy />
      <Footer />
    </div>
  );
};
