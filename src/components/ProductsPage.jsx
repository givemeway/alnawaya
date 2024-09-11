import { DownIcon } from "./icons/DownIcon";
import { useEffect, useRef, useState } from "react";
import "./ProductsPage.css";
import { ListIcon } from "./icons/ListIcon";
import { TwoColumnIcon } from "./icons/TwoColumnIcon";
import { FixedSizeList, FixedSizeGrid } from "react-window";
import { db } from "../DB/category";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Search } from "./Search";
import { useDispatch } from "react-redux";
import { setTabSelection } from "../features/tabSelectedSlice";

const Row = ({ index, style, data }) => {
  return (
    <div style={style} key={index} className="react-window-row">
      <div className="product-card">
        <img src={data[index].image} />
        <div className="product-desc">
          <h6 className="product-name">{data[index].name}</h6>
          <p className="product-summary">{data[index].description}</p>
        </div>
      </div>
    </div>
  );
};

const list = [
  {
    name: "Earring",
    description: "Addison Square Drop 18K Gold plated",
    img: "ear1-360x360.webp",
  },
  {
    name: "Earring",
    description: "Addison Square Drop 18K Gold plated",
    img: "br1-360x360.webp",
  },
  {
    name: "Earring",
    description: "Addison Square Drop 18K Gold plated",
    img: "br1-360x360.webp",
  },
  {
    name: "Earring",
    description: "Addison Square Drop 18K Gold plated",
    img: "br1-360x360.webp",
  },
  {
    name: "Earring",
    description: "Addison Square Drop 18K Gold plated",
    img: "br1-360x360.webp",
  },
  {
    name: "Earring",
    description: "Addison Square Drop 18K Gold plated",
    img: "br1-360x360.webp",
  },
];

export const ProductsPage = ({ items }) => {
  const [expand, setExpand] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sortExpand, setSortExpand] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("");
  const params = useParams();
  const category = params["*"];
  const bodyRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(500);

  const [cord, setCord] = useState({ top: 0, left: 0 });
  const [products, setProducts] = useState([]);
  const btnRef = useRef(null);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  const handleSort = (e) => {
    setCord({
      top: btnRef.current.offsetTop + btnRef.current.offsetHeight,
      left: btnRef.current.offsetLeft,
    });
    setSortExpand((prev) => !prev);
  };

  const handleEarnings = () => {
    navigate("/product-category/earrings");
  };
  const handleAnklets = () => {
    navigate("/product-category/anklets");
  };

  const handleNecklace = () => {
    navigate("/product-category/necklace");
  };
  const handleBracelet = () => {
    navigate("/product-category/bracelets");
  };

  useEffect(() => {
    if (category === "anklets") {
      setChosenCategory("anklets");
      setProducts(db["anklets"]);
    } else if (category === "bracelets") {
      setChosenCategory("bracelets");
      setProducts(db["bracelets"]);
    } else if (category === "earrings") {
      setChosenCategory("earrings");
      setProducts(db["earrings"]);
    } else if (category === "necklace") {
      setChosenCategory("necklace");
      setProducts(db["necklace"]);
    }
  }, []);

  useEffect(() => {
    if (category === "anklets") {
      setChosenCategory("anklets");
      setProducts(db["anklets"]);
      dispatch(
        setTabSelection({
          earnings: false,
          anklets: true,
          necklace: false,
          bracelet: false,
          about: false,
          contact: false,
        })
      );
    } else if (category === "bracelets") {
      setChosenCategory("bracelets");
      setProducts(db["bracelets"]);
      dispatch(
        setTabSelection({
          earnings: false,
          anklets: false,
          necklace: false,
          bracelet: true,
          about: false,
          contact: false,
        })
      );
    } else if (category === "earrings") {
      setChosenCategory("earrings");
      setProducts(db["earrings"]);
      dispatch(
        setTabSelection({
          earnings: true,
          anklets: false,
          necklace: false,
          bracelet: false,
          about: false,
          contact: false,
        })
      );
    } else if (category === "necklace") {
      setChosenCategory("necklace");
      setProducts(db["necklace"]);
      dispatch(
        setTabSelection({
          earnings: false,
          anklets: false,
          necklace: true,
          bracelet: false,
          about: false,
          contact: false,
        })
      );
    }
  }, [category]);

  useEffect(() => {
    if (bodyRef.current) {
      const { height } = bodyRef.current.getBoundingClientRect();
      console.log(height);
      setBodyHeight(height);
    }
  }, [bodyRef.current]);

  return (
    <div className="products-page">
      <div className="products-page-title-container">
        <h2 className="products-page-title">{chosenCategory}</h2>
      </div>
      <div className="category-page-body" ref={bodyRef}>
        <div className="widget-container">
          <div
            className={`category-selector-panel-container ${
              expand ? "expand" : "collapse"
            }`}
          >
            <div className="category-selector-panel-header">
              <h3 className="category-selector-panel-title">Categories</h3>
              <button>
                <DownIcon
                  className={`category-selector-expand-icon ${
                    expand ? "expand-more" : "expand-less"
                  }`}
                  onClick={handleExpand}
                />
              </button>
            </div>

            <div className={`category-selector-list-container`}>
              <button onClick={handleBracelet}>Bracelet</button>
              <button onClick={handleEarnings}>Earrings</button>
              <button onClick={handleNecklace}> Necklace</button>
              <button onClick={handleAnklets}>Anklets</button>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="product-page-header">
            <h4>{products.length} Products</h4>
            <div className="sort-container">
              <span>Sort by</span>
              <button className="sort-btn" ref={btnRef} onClick={handleSort}>
                Default Sorting
                <DownIcon style={{ width: 25, height: 25 }} />
              </button>
              {btnRef.current && sortExpand && (
                <div
                  className="sort-options-container"
                  style={{ top: cord.top, left: cord.left }}
                >
                  <button>Default Sorting</button>
                  <button>Sort A-Z</button>
                  <button>Sort Z-A</button>
                </div>
              )}
            </div>
          </div>
          {/* <FixedSizeList
            height={bodyHeight - 300}
            itemData={products}
            itemSize={200}
            itemCount={products.length}
            className="products-list-container"
          >
            {Row}
          </FixedSizeList> */}
          <div className="products-list-container">
            {products.map((product, index) => (
              <Link
                to={`/product/${product.name}?id=${index}`}
                style={{ textDecoration: "none" }}
              >
                <div key={index} className="react-window-row">
                  <div className="product-card">
                    <img src={product.image} />
                    <div className="product-desc">
                      <h6 className="product-name">{product.name}</h6>
                      <p className="product-summary">{product.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CategoryProductPage = () => {
  return (
    <div className="product-category-page">
      <Search />
      <Header />
      <ProductsPage />
      <Footer />
    </div>
  );
};
