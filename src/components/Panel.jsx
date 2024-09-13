import { useNavigate } from "react-router-dom";
import { CloseIcon } from "./icons/CloseIcon";
import "./Panel.css";
import { useDispatch, useSelector } from "react-redux";
import { setTabSelection } from "../features/tabSelectedSlice";
import { useState } from "react";

export const Panel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [delayClose, setDelayClose] = useState(false);
  const tab = useSelector((state) => state.tabSelection);
  const handleEarnings = () => {
    dispatch(setTabSelection({ ...tab, showContext: false }));

    navigate("/product-category/earrings");
  };
  const handleAnklets = () => {
    dispatch(setTabSelection({ ...tab, showContext: false }));
    navigate("/product-category/anklets");
  };

  const handleNecklace = () => {
    dispatch(setTabSelection({ ...tab, showContext: false }));
    navigate("/product-category/necklace");
  };
  const handleBracelet = () => {
    dispatch(setTabSelection({ ...tab, showContext: false }));
    navigate("/product-category/bracelets");
  };
  const handleAbout = () => {
    dispatch(setTabSelection({ ...tab, showContext: false }));
    navigate("/about-us");
  };
  const handleContact = () => {
    dispatch(setTabSelection({ ...tab, showContext: false }));
    navigate("/contact");
  };

  const handleClose = () => {
    setDelayClose(true);
    dispatch(setTabSelection({ ...tab, showContext: false }));
    setTimeout(() => setDelayClose(false), 290);
  };
  return (
    <div
      className={`panel-container ${
        tab.showContext
          ? "panel-grow"
          : delayClose
          ? "delay-close"
          : "panel-hide"
      }`}
    >
      <div
        className={`side-panel ${
          tab.showContext ? "panel-grow" : "panel-hide"
        }`}
      >
        <CloseIcon
          style={{ height: 25, width: 25 }}
          className={"panel-close-icon"}
          onClick={handleClose}
        />
        <div className="panel-img-container">
          <img src="../../assets/stuartz-green.png" className="panel-img" />
        </div>

        <h3 className="panel-heading">MENU</h3>
        <hr />
        <button onClick={handleEarnings}>Earrings</button>
        <button onClick={handleAnklets}> Anklets</button>
        <button onClick={handleNecklace}>Necklace</button>
        <button onClick={handleBracelet}>Bracelet</button>
        <button onClick={handleAbout}>About</button>
        <button onClick={handleContact}>Contact</button>
      </div>
    </div>
  );
};
