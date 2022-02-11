import "./BannerStart.scss";
import PromoZone from "./PromoZone";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function BannerStart() {
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
        <button className="banner__btn">
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
