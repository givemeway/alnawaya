import "./Home.css";
import { Header } from "./header";
import { useState } from "react";
import { Footer } from "./footer";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { db } from "../DB/category";
import Slider from "react-slick";
export const HomePage = () => {
  const [hover, setHover] = useState(false);
  const [category, setCategory] = useState({
    earrings: false,
    necklace: false,
    rings: false,
    bracelet: false,
  });
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.innerWidth < 767) {
      setSettings((prev) => ({ ...prev, slidesToShow: 1 }));
    }
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

  const handleMouseEnter = (category) => {
    if (category === "NECKLACE") {
      setCategory({
        necklace: true,
        bracelet: false,
        rings: false,
        earrings: false,
      });
    } else if (category === "BRACELET") {
      setCategory({
        necklace: false,
        bracelet: true,
        rings: false,
        earrings: false,
      });
    } else if (category === "EARRINGS") {
      setCategory({
        necklace: false,
        bracelet: false,
        rings: false,
        earrings: true,
      });
    } else if (category === "RINGS") {
      setCategory({
        necklace: false,
        bracelet: false,
        rings: true,
        earrings: false,
      });
    }
    setHover(true);
  };
  const handleMouseLeave = () => {
    setCategory({
      necklace: false,
      bracelet: false,
      rings: false,
      earrings: false,
    });
  };
  return (
    <div className="homepage">
      <Search />
      <Header />
      <div className="home-bg-container">
        <div className="home-shop-container">
          <h2 className="home-h2">Introducing your everyday jewellery. </h2>
          <p className="home-p">14K & 18K Gold Plated</p>
          <button className="home-btn">Shop Now</button>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel-img-container">
              <img src={db["anklets"][1]["image"]} className="carousel-img" />
            </div>
            <div className="carousel-img-container">
              <img src={db["bracelets"][1]["image"]} className="carousel-img" />
            </div>
            <div className="carousel-img-container">
              <img src={db["earrings"][1]["image"]} className="carousel-img" />
            </div>
            <div className="carousel-img-container">
              <img src={db["necklace"][1]["image"]} className="carousel-img" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="home-categories-container">
        <h2 className="category-heading">Popular Categories</h2>
        <div className="home-category-grid">
          <Link
            className="category-container"
            onMouseEnter={() => handleMouseEnter("EARRINGS")}
            onMouseLeave={handleMouseLeave}
            to={"/product-category/earrings"}
          >
            <div className="category-circle">
              <img src="../../assets/ear1-360x360.webp" />
            </div>
            <button
              className={`header-btn ${
                category.earrings ? "isHover" : "noHover"
              }`}
            >
              EARRINGS
            </button>
          </Link>
          <Link
            className="category-container"
            onMouseEnter={() => handleMouseEnter("RINGS")}
            onMouseLeave={handleMouseLeave}
            to={"/product-category/anklets"}
          >
            <div className="category-circle">
              <img src="../../assets/MKAK012SSBL_1_160x.jpg" />
            </div>
            <button
              className={`header-btn ${category.rings ? "isHover" : "noHover"}`}
            >
              ANKLETS
            </button>
          </Link>
          <Link
            className="category-container"
            onMouseEnter={() => handleMouseEnter("NECKLACE")}
            onMouseLeave={handleMouseLeave}
            to={"/product-category/necklace"}
          >
            <div className="category-circle">
              <img src="../../assets/chain1-360x360.webp" />
            </div>
            <button
              className={`header-btn ${
                category.necklace ? "isHover" : "noHover"
              }`}
            >
              NECKLACE
            </button>
          </Link>
          <Link
            className="category-container"
            onMouseEnter={() => handleMouseEnter("BRACELET")}
            onMouseLeave={handleMouseLeave}
            to={"/product-category/bracelets"}
          >
            <div className="category-circle">
              <img src="../../assets/br1-360x360.webp" />
            </div>
            <button
              className={`header-btn ${
                category.bracelet ? "isHover" : "noHover"
              }`}
            >
              BRACELET
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
