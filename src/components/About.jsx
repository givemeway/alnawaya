import { useDispatch } from "react-redux";
import "./About.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
export const AboutUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setTabSelection({
        earnings: false,
        rings: false,
        necklace: false,
        bracelet: false,
        about: true,
        contact: false,
      })
    );
  }, []);

  return (
    <div className="about-us-body">
      <div className="about-us-container">
        <h2 className="about-us-title">About Us</h2>
        <h3 className="about-us-heading">Introducing The New Era of Staurtz</h3>
        <p className="about-us-p">
          Started in India in 2021 as small outlet attending to the needs of
          retailers for quality and endurance jewellry needs, Al Nawaya has now
          grown the network to other parts of the world, beginning with UAE.
          With projects to upscale the business to other GCC countries.
        </p>
        <p className="about-us-p">
          We are fuelled by our passion for helping people mark life’s most
          meaningful moments. Each piece is made to be worn and loved for a
          lifetime, and our commitment to quality, craft and creativity is just
          as strong today as it was when we first began.
        </p>
        <p className="about-us-p">
          We are dedicated to sustainability and responsible sourcing, with
          clear goals outlined for 2030. Dedicated to empowering women and
          restoring and conserving nature, we are striving to create positive
          impacts for our communities and environments.
        </p>
      </div>
    </div>
  );
};

export const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Search />
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};
