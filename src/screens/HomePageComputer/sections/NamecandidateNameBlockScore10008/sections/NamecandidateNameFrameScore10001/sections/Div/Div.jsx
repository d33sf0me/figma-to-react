import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 437px;
  left: 808px;
  position: absolute;
  top: 9px;
  width: 385px;

  & .overlap-5 {
    height: 437px;
    position: relative;
  }

  & .neon-up-arrow {
    height: 390px;
    left: 23px;
    object-fit: cover;
    position: absolute;
    top: 34px;
    width: 351px;
  }

  & .star {
    height: 437px;
    left: 0;
    position: absolute;
    top: 0;
    width: 385px;
  }

  & .group-15 {
    height: 118px;
    left: 80px;
    position: absolute;
    top: 175px;
    transform: rotate(-3deg);
    width: 227px;
  }

  & .element-2 {
    color: #b6b6b6;
    font-family: "Roboto", Helvetica;
    font-size: 20px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 225px;
  }

  & .frame-21 {
    border: 1px solid;
    border-color: #b6b6b6;
    border-radius: 10px;
    height: 30px;
    left: 40px;
    overflow: hidden;
    position: absolute;
    top: 88px;
    width: 145px;
  }

  & .text-wrapper-40 {
    color: #b6b6b6;
    font-family: "Roboto", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 5px;
    width: 145px;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      <div className="overlap-5">
        <img className="neon-up-arrow" alt="Neon up arrow" src="/img/neon-up-arrow-1.png" />
        <img className="star" alt="Star" src="/img/star-1.svg" />
        <div className="group-15">
          <p className="element-2">ЗА ВСЁ ВРЕМЯ МЫ ПОДНЯЛИ ДОХОД БОЛЕЕ 150 САЙТАМ</p>
          <div className="frame-21">
            <div className="text-wrapper-40">СМОТРЕТЬ КЕЙСЫ</div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};
