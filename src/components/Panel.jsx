import { useNavigate } from "react-router-dom";
import { CloseIcon } from "./icons/CloseIcon";
import "./Panel.css";
import { useDispatch, useSelector } from "react-redux";
import { setTabSelection } from "../features/tabSelectedSlice";

export const Panel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.tabSelection);
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
  const handleAbout = () => {
    navigate("/about-us");
  };
  const handleContact = () => {
    navigate("/contact");
  };

  const handleClose = () => {
    dispatch(setTabSelection({ ...tab, showContext: false }));
  };
  return (
    <div className="panel-container">
      <div className="side-panel">
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
