import React from "react";
import { Menu } from "../../../../components/Menu/Menu";
import styled from "styled-components";

const StyledNamecandidateNameBlockScore10009 = styled.div`
  background: linear-gradient(
    180deg,
    rgba(16, 16, 16, 0.5) 0%,
    rgba(21, 21, 21, 0.5) 100%
  );
  height: 690px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1200px;

  & .overlap-18 {
    height: 650px;
    position: relative;
    top: 20px;
  }

  & .image-3 {
    background: url("/image.svg") no-repeat;
    height: 470px;
    left: 0;
    position: absolute;
    top: 136px;
    width: 1200px;
  }

  & .rectangle-23 {
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 650px;
    left: 20px;
    position: absolute;
    top: 0;
    width: 1160px;
  }

  & .group-42 {
    height: 356px;
    left: 270px;
    position: absolute;
    top: 150px;
    width: 666px;
  }

  & .element-5 {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 56px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 67.2px;
    position: absolute;
    text-align: center;
    top: 57px;
    width: 660px;
  }

  & .text-wrapper-85 {
    color: var(--grey);
    font-family: var(--h3-font-family);
    font-size: var(--h3-font-size);
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    left: 159px;
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    position: absolute;
    text-align: center;
    top: 288px;
    width: 343px;
  }

  & .text-wrapper-86 {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(
      180deg,
      rgb(170.01, 99.91, 193.37) 0%,
      rgb(5, 216, 232) 100%
    );
    background-clip: text;
    color: transparent;
    font-family: "Inter", Helvetica;
    font-size: 22px;
    font-weight: 400;
    height: 27px;
    left: 166px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    text-fill-color: transparent;
    top: 0;
  }

  & .menu-instance {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }
`;

export const NamecandidateNameBlockScore10009 = () => {
  return (
    <StyledNamecandidateNameBlockScore10009>
      <div className="overlap-18">
        <span className="image-3"></span>
        <div className="rectangle-23" />
        <div className="group-42">
          <p className="element-5">
            УВЕЛИЧИМ ДОХОД ВАШЕГО САЙТА
            <br />
            НА 20-300%
          </p>
          <p className="text-wrapper-85">ЗА СЧЕТ УМНОЙ ДОКРУТКИ РЕКЛАМЫ</p>
          <div className="text-wrapper-86">Агенство монетизации сайтов</div>
        </div>
        <Menu className="menu-instance" />
      </div>
    </StyledNamecandidateNameBlockScore10009>
  );
};
