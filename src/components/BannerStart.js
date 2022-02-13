import "./BannerStart.scss";
import PromoZone from "./PromoZone";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect, useRef } from "react";

function BannerStart() {
  const navigate = useNavigate();
  const refBanner = useRef(null);
  useEffect(() => {
    refBanner.current.focus();
    console.log(refBanner);
  }, []);

  const pressKeyEnter = (e) => {
    if (e.code === "Enter") {
      navigate("/promozone");
    } else {
      return;
    }
  };

  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__title">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </div>
        <div className="banner__qr">
          <img src="images/qr.jpg" alt="start" />
        </div>
        <div className="banner__text">Сканируйте QR-код или нажмите ОК</div>
        <button
          onKeyDown={pressKeyEnter}
          ref={refBanner}
          className="banner__btn"
        >
          <Link to="/promozone">OK</Link>
        </button>
      </div>
      {/* <Routes>
        <Route path="/promozone" element={<PromoZone />}></Route>
      </Routes> */}
    </div>
  );
}

export default BannerStart;
