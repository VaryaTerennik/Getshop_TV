import BannerFinal from "./BannerFinal";
import BannerKeyboard from "./BannerKeyboard";
import "./PromoZone.scss";

function PromoZone() {
  return (
    <div className="promo">
      <div className="promo__wrapper">
        <img src="images/promo.jpg" alt="promo" />
      </div>
      <BannerKeyboard
      // onKeyDown={handlePressArrowKey}
      // items={myList}
      ></BannerKeyboard>

      {<BannerFinal></BannerFinal>}
    </div>
  );
}

export default PromoZone;
