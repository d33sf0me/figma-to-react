import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { DivWrapper } from "../DivWrapper/DivWrapper";

const StyledBlock = styled.div`
  background-color: var(--black);
  height: 756px;
  overflow: hidden;
  width: 1200px;

  & .overlap-group {
    height: 1056px;
    position: relative;
  }

  & .rectangle {
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 1056px;
    left: 20px;
    position: absolute;
    top: 0;
    width: 1160px;
  }

  & .frame-2 {
    height: 345px;
    left: 0;
    position: absolute;
    top: 20px;
    width: 1200px;
  }

  & .frame-3 {
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 70px;
    left: 620px;
    overflow: hidden;
    position: absolute;
    top: 275px;
    width: 540px;
  }

  & .text-wrapper-2 {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 21px;
    left: 5px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 23px;
    width: 530px;
  }

  & .p {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    left: 620px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 87px;
    width: 540px;
  }

  & .text-wrapper-3 {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    height: 23px;
    left: 45px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    text-align: center;
    top: 87px;
    width: 38px;
  }

  & .rectangle-2 {
    background-color: var(--grey);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 1px;
    left: 40px;
    position: absolute;
    top: 124px;
    width: 540px;
  }

  & .text-wrapper-4 {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    height: 23px;
    left: 45px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 145px;
    width: 287px;
  }

  & .rectangle-3 {
    background-color: var(--grey);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 1px;
    left: 40px;
    position: absolute;
    top: 184px;
    width: 540px;
  }

  & .text-wrapper-5 {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    height: 23px;
    left: 45px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 204px;
    width: 82px;
  }

  & .rectangle-4 {
    background-color: var(--grey);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 1px;
    left: 40px;
    position: absolute;
    top: 244px;
    width: 540px;
  }

  & .frame-4 {
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 70px;
    left: 40px;
    overflow: hidden;
    position: absolute;
    top: 275px;
    width: 540px;
  }

  & .group-2 {
    height: 68px;
    left: 40px;
    position: absolute;
    top: 0;
    width: 456px;
  }

  & .text-wrapper-6 {
    color: var(--white);
    font-family: var(--h3-font-family);
    font-size: var(--h3-font-size);
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    height: 34px;
    left: 0;
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .text-wrapper-7 {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    background-clip: text;
    color: transparent;
    font-family: var(--h3-font-family);
    font-size: var(--h3-font-size);
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    left: 0;
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    position: absolute;
    text-fill-color: transparent;
    top: 34px;
    white-space: nowrap;
  }

  & .group-3 {
    height: 68px;
    left: 620px;
    position: absolute;
    top: 0;
    width: 288px;
  }

  & .frame-5 {
    height: 361px;
    left: 0;
    position: absolute;
    top: 395px;
    width: 1200px;
  }

  & .overlap-group-2 {
    height: 361px;
    position: relative;
  }

  & .vector {
    height: 322px;
    left: 0;
    position: absolute;
    top: 39px;
    width: 1200px;
  }

  & .neon-young-man-using {
    height: 277px;
    left: 461px;
    object-fit: cover;
    position: absolute;
    top: 69px;
    width: 278px;
  }

  & .img {
    height: 361px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1200px;
  }

  & .group-4 {
    height: 23px;
    left: 20px;
    position: absolute;
    top: 318px;
    width: 579px;
  }

  & .text-wrapper-8 {
    color: var(--white);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    height: 23px;
    left: 0;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .text-wrapper-9 {
    color: var(--white);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    height: 23px;
    left: 312px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .text-wrapper-10 {
    color: var(--white);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    height: 23px;
    left: 490px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .group-5 {
    height: 66px;
    left: 905px;
    position: absolute;
    top: 275px;
    width: 275px;
  }

  & .component-676 {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .group-6 {
    height: 32px;
    left: 2px;
    position: absolute;
    top: 34px;
    width: 277px;
  }

  & .element {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 18px;
    font-weight: 600;
    height: 23px;
    left: 25px;
    letter-spacing: 0;
    line-height: 23.4px;
    position: absolute;
    text-align: right;
    top: 5px;
    white-space: nowrap;
  }

  & .text-wrapper-11 {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 25px;
    font-weight: 600;
    height: 32px;
    left: 0;
    letter-spacing: 0;
    line-height: 32.5px;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }
`;

export const Block = ({
  className,
  vector = "/img/vector-1-1.svg",
  neonYoungManUsing = "/img/neon-young-man-using-biometric-authentication-1-1.png",
  img = "/img/vector-2-1.svg"
}) => {
  return (
    <StyledBlock className={`block ${className}`}>
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="frame-2">
          <div className="frame-3">
            <div className="text-wrapper-2">ЗАДАТЬ ВОПРОС</div>
          </div>
          <p className="p">
            Оставьте свой вопрос, наши менеджеры свяжутся с вами, и всё детально расскажут, а так же помогут подобрать
            услугу специально для вас.
          </p>
          <div className="text-wrapper-3">Имя</div>
          <div className="rectangle-2" />
          <p className="text-wrapper-4">Ваши контакты (Telegram, VK, ...)</p>
          <div className="rectangle-3" />
          <div className="text-wrapper-5">Ваш сайт</div>
          <div className="rectangle-4" />
          <div className="frame-4">
            <div className="text-wrapper-2">УВЕЛИЧИТЬ ДОХОД</div>
          </div>
          <div className="group-2">
            <div className="text-wrapper-6">ОБРАТИТЕСЬ К НАМ, ЧТОБЫ</div>
            <div className="text-wrapper-7">УВЕЛИЧИТЬ ДОХОД ВАШЕГО САЙТА</div>
          </div>
          <div className="group-3">
            <div className="text-wrapper-6">ОСТАЛИСЬ ВОПРОСЫ?</div>
            <div className="text-wrapper-7">МЫ ОТВЕТИМ!</div>
          </div>
        </div>
        <div className="frame-5">
          <div className="overlap-group-2">
            <img className="vector" alt="Vector" src={vector} />
            <img className="neon-young-man-using" alt="Neon young man using" src={neonYoungManUsing} />
            <img className="img" alt="Vector" src={img} />
            <div className="group-4">
              <div className="text-wrapper-8">Политика конфиденциальности</div>
              <div className="text-wrapper-9">Договор оферта</div>
              <div className="text-wrapper-10">Контакты</div>
            </div>
            <div className="group-5">
              <DivWrapper className="component-676" />
              <div className="group-6">
                <div className="element">2013 НАЗВАНИЕ КОМПАНИИ</div>
                <div className="text-wrapper-11">©</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledBlock>
  );
};

Block.propTypes = {
  vector: PropTypes.string,
  neonYoungManUsing: PropTypes.string,
  img: PropTypes.string
};