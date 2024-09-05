import "./Home.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Search } from "./Search";
import { useEffect } from "react";
import { setTabSelection } from "../features/tabSelectedSlice";
import { useDispatch } from "react-redux";
export const HomePage = () => {
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
    <div className="homepage">
      <Search />
      <Header />
      <Footer />
    </div>
  );
};
