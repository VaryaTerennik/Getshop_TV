import "./BannerKeyboard.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BannerKeyboard() {
  const navigate = useNavigate();
  const items = [
    { id: "0", value: "1" },
    { id: "1", value: "2" },
    { id: "2", value: "3" },
    { id: "3", value: "4" },
    { id: "4", value: "5" },
    { id: "5", value: "6" },
    { id: "6", value: "7" },
    { id: "7", value: "8" },
    { id: "8", value: "9" },
    { id: "9", value: "СТЕРЕТЬ" },
    { id: "10", value: "0" },
    { id: "11", value: "ПОДТВЕРДИТЬ НОМЕР" },
    { id: "12", value: "X" },
  ];
  console.log(items);
  const { register, handleSubmit, setValue, getValues, formState } = useForm({
    mode: "onChange",
  });

  const [pstate, setPstate] = useState({
    buttonsArr: [
      { id: 0, isActive: false },
      { id: 1, isActive: false },
      { id: 2, isActive: false },
      { id: 3, isActive: false },
      { id: 4, isActive: false },
      { id: 5, isActive: false },
      { id: 6, isActive: false },
      { id: 7, isActive: false },
      { id: 8, isActive: false },
      { id: 9, isActive: false },
      { id: 10, isActive: false },
      { id: 11, isActive: false },
      { id: 12, isActive: false },
    ],
    activeId: null,
  });
  const [number, setNumber] = useState([]);

  const getDerivedStateFromProps = ({ items }, pstate) => {
    const store = items.map((i, n) => ({ id: n, isActive: false }));
    console.log(pstate.buttonsArr);

    setPstate(
      pstate.buttonsArr.length ? null : pstate.buttonsArr.push(...store)
    );
  };

  const checkKeys = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.code.includes("Digit")) {
      console.log(e.code);
      return;
    }
    // const { buttonsArr, activeId } = { buttonsArr, activeId };
    let nextActiveId = pstate.activeId;

    if (pstate.activeId == null) {
      // проверяем если ли уже выбранные блоки клавиатурой
      const newList = pstate.buttonsArr.map((i) =>
        i.id === 0 ? { ...i, isActive: true } : i
      );
      console.log(newList);

      return setPstate({ buttonsArr: newList, activeId: 0 });
    }

    if (e.keyCode === 37) {
      nextActiveId -= 1;
      console.log(nextActiveId);
    } else if (e.keyCode === 38) {
      nextActiveId -= 3;
      console.log(nextActiveId);
    } else if (e.keyCode === 39) {
      nextActiveId += 1;
      console.log(nextActiveId);
    } else if (e.keyCode === 40) {
      nextActiveId += 3;
      console.log(nextActiveId);
    } else if (e.code === "Enter" || e.code === "NumpadEnter") {
      const activeElstatus = pstate.buttonsArr.find(
        (el) => el.isActive === true
      );
      console.log(activeElstatus);
      const activeEl = items.find((el) => +el.id === activeElstatus.id);
      console.log(activeEl);
      if (+activeEl.id <= 10) {
        handleGetValueEnter(activeEl);
      } else if (+activeEl.id === 11) {
        handleSubmit(onFormSubmit)();
      } else if (+activeEl.id === 12) {
        navigate("/");
      }
    } else {
      return;
    }

    // проверяем не вышли ли мы за границы блоков
    if (nextActiveId < 0 || nextActiveId > pstate.buttonsArr.length - 1) {
      return;
    }

    return setPstate({
      buttonsArr: pstate.buttonsArr.map((i) => ({
        ...i,
        isActive: i.id === nextActiveId,
      })),
      activeId: nextActiveId,
    });

    // return pstate;
  };

  useEffect(() => {
    setPstate(pstate);
  }, [pstate]);

  const handlePressKey = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (event.code.includes("Digit")) {
      const newNum = event.code.substring(event.code.length - 1);
      setNumber([...number, newNum]);
      console.log(number);
    }
  };

  // const handlePressKeyEnter = (event) => {
  //   console.log(event.code);

  //   if (event.code === "Enter" || event.code === "NumpadEnter") {
  //     const activeEl = pstate.buttonsArr.find((el) => el.isActive === true);
  //     console.log(activeEl);
  //   } else {
  //   }
  // };

  const onFormSubmit = (data) => {
    const number = {
      number: data.number,
      agreement: data.agreement,
    };
    console.log(number);
  };

  const handleGetValue = (e) => {
    e.stopPropagation();
    const newNum = e.target.value;
    if (newNum === "СТЕРЕТЬ") {
      const delNumber = number.splice(number.length - 1, 1);
      setNumber([...number]);
    } else {
      console.log(newNum);
      setNumber([...number, newNum]);
    }
  };

  const handleGetValueEnter = (elem) => {
    const newNum = +elem.value;
    if (newNum === "СТЕРЕТЬ") {
      const delNumber = number.splice(number.length - 1, 1);
      setNumber([...number]);
    } else {
      console.log(newNum);
      setNumber([...number, newNum]);
    }
  };

  useEffect(() => {
    setValue("number", [...number].join(""));
  }, [number]);

  const buttons = items.map((butt) => {
    if (+butt.id <= 10) {
      const i = pstate.buttonsArr.find((item) => item.id === +butt.id);
      return (
        <button
          onClick={handleGetValue}
          id={butt.id}
          value={butt.value}
          key={butt.id}
          className={
            i.isActive
              ? "active keyboard__number_hover"
              : "keyboard__number_hover"
          }
          // className="keyboard__number_hover"
        >
          {butt.value}
        </button>
      );
    }
  });

  return (
    <div className="banner-keyboard__full">
      {items.map((butt) => {
        if (+butt.id === 12) {
          const i = pstate.buttonsArr.find((item) => item.id === +butt.id);
          return (
            <button
              id={butt.id}
              key={butt.id}
              type="submit"
              // className="banner-keyboard__btn"
              className={
                i.isActive ? "active promo__btn-close" : "promo__btn-close"
              }
            >
              <Link to="/">{butt.value}</Link>
            </button>
          );
        }
      })}
      {/* <button className="promo__btn-close">X</button> */}
      <div className="banner-keyboard">
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="banner-keyboard__wrapper"
        >
          <div className="banner-keyboard__title">
            Введите ваш номер мобильного телефона
          </div>
          <div className="banner-keyboard__number">
            <input
              type="number"
              onKeyPress={handlePressKey}
              {...register("number", {
                required: true,
              })}
            />
          </div>
          <div className="banner-keyboard__text">
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </div>
          <div className="keyboard">
            <div
              className="keyboard__wrapper"
              onKeyDown={checkKeys}
              tabIndex="0"
            >
              {buttons}
            </div>
          </div>
          <lable className="banner-keyboard__checkbox">
            <input {...register("agreement")} type="checkbox" />
            Согласие на обработку персональных данных
          </lable>
          {items.map((butt) => {
            if (+butt.id === 11) {
              const i = pstate.buttonsArr.find((item) => item.id === +butt.id);
              return (
                <button
                  id={butt.id}
                  key={butt.id}
                  type="submit"
                  // className="banner-keyboard__btn"
                  className={
                    i.isActive
                      ? "active banner-keyboard__btn"
                      : "banner-keyboard__btn"
                  }
                >
                  {butt.value}
                </button>
              );
            }
          })}
        </form>
      </div>
    </div>
  );
}

export default BannerKeyboard;
