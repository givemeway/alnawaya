import { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "./ProductPage.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Search } from "./Search";
import { useLocation, useParams } from "react-router-dom";
import { db } from "../DB/category_bk";
import Slider from "react-slick";

export const Product = () => {
  const params = useParams();
  const location = useLocation();
  const productName = params["*"];
  const [product, setProduct] = useState(undefined);
  const [productID, setProductID] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSelect = (idx) => {
    const img = db[productName][productID]["images"][idx];
    setSelectedImage(img);
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  useEffect(() => {
    if (location.search.length > 0) {
      const url = new URLSearchParams(location.search);
      const id = url.get("id");
      setProductID(id);
      setProduct(db[productName][id]);
      setSelectedImage(db[productName][id]["image"]);
    }
  }, [location.search]);

  return (
    <div className="product-page">
      <div className="product-body">
        <div className="imgs-preview-container">
          {product && (
            <div className="imgs-container">
              {product["images_thumb"].map((img, idx) => (
                <img
                  src={img}
                  key={idx}
                  className="img-small"
                  onClick={() => handleSelect(idx)}
                />
              ))}
            </div>
          )}
          <InnerImageZoom
            src={selectedImage}
            zoomType="click"
            zoomScale={1.2}
            hideHint={true}
            className="img-zoom"
            height={900}
            width={400}
          />
        </div>
        {product && (
          <div className="mobile-slider-container">
            <Slider {...settings}>
              {product["images"].map((img, idx) => (
                <div className="mobile-img-container">
                  <img
                    src={img}
                    key={idx}
                    className="carousel-img"
                    onClick={() => handleSelect(idx)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
        {product && (
          <div className="product-description-container">
            <div className="description-container">
              <h3 className="description-heading">{product["description"]}</h3>
            </div>
            <div className="product-sku-container">
              <span className="product-sku">SKU:</span>
              <span>CCEARING1079</span>
            </div>
            <div className="product-category-container">
              <span className="product-category">Category:</span>
              <span>{product["name"]}</span>
            </div>
            <div className="product-detailed-descrption-container">
              <h3 className="detailed-description-title">Description</h3>
              <p
                className="detailed-description-p"
                style={{ textOverflow: "ellipsis" }}
              >
                {product["description_details"]}
              </p>
              <ul className="description-ul">
                {product["description_list"].map((list, idx) => (
                  <li key={idx}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProductPage = () => {
  return (
    <div className="product-whole-page">
      <Search />
      <Header />
      <Product />
      <Footer />
    </div>
  );
};
