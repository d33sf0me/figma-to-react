import React from "react";
import styled from "styled-components";

const StyledOverlapGroupWrapper = styled.div`
  height: 400px;
  left: 20px;
  position: absolute;
  top: 788px;
  width: 767px;

  & .overlap-4 {
    height: 400px;
    position: relative;
    width: 759px;
  }

  & .frame-18 {
    background-color: var(--black);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 370px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 759px;
  }

  & .group-13 {
    height: 35px;
    left: -31px;
    position: relative;
    top: 62px;
    transform: rotate(-98.17deg);
    width: 74px;
  }

  & .neon-constellation-3 {
    height: 75px;
    left: 19px;
    object-fit: cover;
    position: absolute;
    top: -13px;
    transform: rotate(98.17deg);
    width: 30px;
  }

  & .neon-constellation-4 {
    height: 21px;
    left: 57px;
    position: absolute;
    top: 11px;
    transform: rotate(98.17deg);
    width: 13px;
  }

  & .text-wrapper-34 {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    background-clip: text;
    color: transparent;
    font-family: var(--h3-font-family);
    font-size: var(--h3-font-size);
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    left: 30px;
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    position: absolute;
    text-fill-color: transparent;
    top: 30px;
    width: 438px;
  }

  & .text-wrapper-35 {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    left: 30px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 230px;
    width: 705px;
  }

  & .group-14 {
    height: 71px;
    left: 0;
    position: absolute;
    top: 329px;
    width: 759px;
  }

  & .overlap-group-8 {
    height: 71px;
    position: relative;
  }

  & .frame-19 {
    background-color: var(--black);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 71px;
    left: 379px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 380px;
  }

  & .text-wrapper-36 {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 21px;
    left: 0;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 24px;
    width: 401px;
  }

  & .frame-20 {
    background-color: var(--black);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 71px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 380px;
  }

  & .text-wrapper-37 {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 21px;
    left: 0;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 24px;
    width: 360px;
  }

  & .text-wrapper-38 {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    left: 50px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 118px;
    width: 680px;
  }

  & .ellipse-7 {
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    border-radius: 3.5px;
    height: 7px;
    left: 30px;
    position: absolute;
    top: 126px;
    width: 7px;
  }

  & .text-wrapper-39 {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    left: 50px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 164px;
    width: 680px;
  }

  & .ellipse-8 {
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    border-radius: 3.5px;
    height: 7px;
    left: 30px;
    position: absolute;
    top: 172px;
    width: 7px;
  }

  & .vector-4 {
    height: 4px;
    left: 27px;
    position: absolute;
    top: 60px;
    width: 247px;
  }
`;

export const OverlapGroupWrapper = () => {
  return (
    <StyledOverlapGroupWrapper>
      <div className="overlap-4">
        <div className="frame-18">
          <div className="group-13">
            <img className="neon-constellation-3" alt="Neon constellation" src="/img/neon-constellation-2.png" />
            <img className="neon-constellation-4" alt="Neon constellation" src="/img/neon-constellation-3.png" />
          </div>
        </div>
        <p className="text-wrapper-34">ПОЛНЫЙ АУТСОРС МОНЕТИЗАЦИИ ВАШЕГО ПРОЕКТА</p>
        <p className="text-wrapper-35">
          Вы платите 8% от дохода, и полностью делегируете процесс монетизации нам. Берем в работу сайты и группы сайтов
          от 5000 уникальных пользователей в сутки из поисковых систем.
        </p>
        <div className="group-14">
          <div className="overlap-group-8">
            <div className="frame-19">
              <div className="text-wrapper-36">ЗАКАЗАТЬ УСЛУГУ</div>
            </div>
            <div className="frame-20">
              <div className="text-wrapper-37">ЧИТАТЬ ПОДРОБНЕЕ</div>
            </div>
          </div>
        </div>
        <p className="text-wrapper-38">
          Полное делегирование и ведение монетизации вашего сайта, вы освободите время для создания контента;
        </p>
        <div className="ellipse-7" />
        <p className="text-wrapper-39">
          Оптимизируем все важные рекламные метрики на сайте. Консультируем по SEO вопросам, связанным с рекламой.
        </p>
        <div className="ellipse-8" />
        <img className="vector-4" alt="Vector" src="/img/vector-5.svg" />
      </div>
    </StyledOverlapGroupWrapper>
  );
};
