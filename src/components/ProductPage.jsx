import { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "./ProductPage.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Search } from "./Search";
import { useLocation, useParams } from "react-router-dom";
import { db } from "../DB/category";

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
              {product["images"].map((img, idx) => (
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
