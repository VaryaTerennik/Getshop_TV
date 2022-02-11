import "./BannerKeyboard.scss";

function BannerKeyboard() {
  return (
    <div className="banner-keyboard">
      <div className="banner-keyboard__wrapper">
        <div className="banner-keyboard__title">
          Введите ваш номер мобильного телефона
        </div>
        <div className="banner-keyboard__number">
          <input />
        </div>
        <div className="banner-keyboard__text">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </div>
        <div className="keyboard">
          <div className="keyboard__wrapper">
            <button className="keyboard__number1 keyboard__number_hover">
              1
            </button>
            <button className="keyboard__number2 keyboard__number_hover">
              2
            </button>
            <button className="keyboard__number3 keyboard__number_hover">
              3
            </button>
            <button className="keyboard__number4 keyboard__number_hover">
              4
            </button>
            <button className="keyboard__number5 keyboard__number_hover">
              5
            </button>
            <button className="keyboard__number6 keyboard__number_hover">
              6
            </button>
            <button className="keyboard__number7 keyboard__number_hover">
              7
            </button>
            <button className="keyboard__number8 keyboard__number_hover">
              8
            </button>
            <button className="keyboard__number9 keyboard__number_hover">
              9
            </button>
            <button className="keyboard__number10 keyboard__number_hover">
              Стереть
            </button>
            <button className="keyboard__number11 keyboard__number_hover">
              0
            </button>
          </div>
        </div>
        <lable className="banner-keyboard__checkbox">
          <input type="checkbox" />
          Согласие на обработку персональных данных
        </lable>
        <button className="banner-keyboard__btn">Подтвердить номер</button>
      </div>
    </div>
  );
}

export default BannerKeyboard;
