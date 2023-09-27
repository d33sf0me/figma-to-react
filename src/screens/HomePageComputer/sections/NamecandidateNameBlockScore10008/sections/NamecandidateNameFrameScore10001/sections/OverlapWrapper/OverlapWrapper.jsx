import React from "react";
import styled from "styled-components";

const StyledOverlapWrapper = styled.div`
  height: 377px;
  left: 20px;
  position: absolute;
  top: 381px;
  width: 767px;

  & .overlap-3 {
    height: 377px;
    position: relative;
    width: 759px;
  }

  & .frame-15 {
    background-color: var(--black);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 331px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 759px;
  }

  & .neon-constellation-2 {
    height: 59px;
    left: 612px;
    object-fit: cover;
    position: absolute;
    top: 22px;
    width: 110px;
  }

  & .text-wrapper-28 {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    background-clip: text;
    color: transparent;
    font-family: "Roboto", Helvetica;
    font-size: 26px;
    font-weight: 600;
    left: 30px;
    letter-spacing: 0;
    line-height: 33.8px;
    position: absolute;
    text-fill-color: transparent;
    top: 30px;
    width: 478px;
  }

  & .text-wrapper-29 {
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

  & .group-12 {
    height: 71px;
    left: 0;
    position: absolute;
    top: 306px;
    width: 759px;
  }

  & .overlap-group-7 {
    height: 71px;
    position: relative;
  }

  & .frame-16 {
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

  & .text-wrapper-30 {
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

  & .frame-17 {
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

  & .text-wrapper-31 {
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

  & .vector-3 {
    height: 4px;
    left: 27px;
    position: absolute;
    top: 60px;
    width: 289px;
  }

  & .text-wrapper-32 {
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

  & .ellipse-5 {
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    border-radius: 3.5px;
    height: 7px;
    left: 30px;
    position: absolute;
    top: 126px;
    width: 7px;
  }

  & .text-wrapper-33 {
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

  & .ellipse-6 {
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    border-radius: 3.5px;
    height: 7px;
    left: 30px;
    position: absolute;
    top: 172px;
    width: 7px;
  }
`;

export const OverlapWrapper = () => {
  return (
    <StyledOverlapWrapper>
      <div className="overlap-3">
        <div className="frame-15">
          <img className="neon-constellation-2" alt="Neon constellation" src="/img/neon-constellation-1-1.png" />
        </div>
        <div className="text-wrapper-28">БАЗОВАЯ НАСТРОЙКА МОНЕТИЗАЦИИ САЙТА</div>
        <p className="text-wrapper-29">
          Фиксированная цена 3 990 рублей. Принимаем сайты от 500 уникальных пользователей в сутки из поисковых систем.
        </p>
        <div className="group-12">
          <div className="overlap-group-7">
            <div className="frame-16">
              <div className="text-wrapper-30">ЗАКАЗАТЬ УСЛУГУ</div>
            </div>
            <div className="frame-17">
              <div className="text-wrapper-31">ЧИТАТЬ ПОДРОБНЕЕ</div>
            </div>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="/img/vector-6.svg" />
        <p className="text-wrapper-32">
          Получаете рост дохода, без временных затрат на проведения A/B тестов и подбор рекламных сетей;
        </p>
        <div className="ellipse-5" />
        <p className="text-wrapper-33">
          Рекламный развес полностью соответствует требованиям безопасности Яндекса и Google, и всех рекламных сетей.
        </p>
        <div className="ellipse-6" />
      </div>
    </StyledOverlapWrapper>
  );
};
