import React from "react";
import { Reviews } from "../../../../components/Reviews";
import styled from "styled-components";

const StyledNamecandidateNameBlockScore10003 = styled.div`
  height: 660px;
  left: 0;
  position: absolute;
  top: 6133px;
  width: 1200px;

  & .frame-35 {
    height: 140px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1200px;
  }

  & .text-wrapper-57 {
    color: var(--grey);
    font-family: "Roboto", Helvetica;
    font-size: 18px;
    font-weight: 400;
    left: 1104px;
    letter-spacing: 0;
    line-height: 23.4px;
    position: absolute;
    text-align: right;
    top: 26px;
    white-space: nowrap;
  }

  & .text-wrapper-58 {
    color: var(--white);
    font-family: var(--h2-font-family);
    font-size: var(--h2-font-size);
    font-style: var(--h2-font-style);
    font-weight: var(--h2-font-weight);
    left: 20px;
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);
    position: absolute;
    top: 19px;
    white-space: nowrap;
  }

  & .text-wrapper-59 {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    background-clip: text;
    color: transparent;
    font-family: var(--h2-font-family);
    font-size: var(--h2-font-size);
    font-style: var(--h2-font-style);
    font-weight: var(--h2-font-weight);
    left: 20px;
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);
    position: absolute;
    text-fill-color: transparent;
    top: 79px;
    white-space: nowrap;
  }

  & .arrow-4 {
    height: 7px;
    left: 820px;
    object-fit: cover;
    position: absolute;
    top: 34px;
    width: 250px;
  }

  & .reviews-instance {
    left: 0 !important;
    position: absolute !important;
    top: 180px !important;
  }
`;

export const NamecandidateNameBlockScore10003 = () => {
  return (
    <StyledNamecandidateNameBlockScore10003>
      <div className="frame-35">
        <div className="text-wrapper-57">ОТЗЫВЫ</div>
        <div className="text-wrapper-58">ВСЕ НАШИ КЛИЕНТЫ</div>
        <div className="text-wrapper-59">ДОВОЛЬНЫ РЕЗУЛЬТАТАМИ</div>
        <img className="arrow-4" alt="Arrow" src="/img/arrow-1-3.svg" />
      </div>
      <Reviews className="reviews-instance" img="/img/uil-arrow.svg" uilArrow="/img/uil-arrow-1.svg" />
    </StyledNamecandidateNameBlockScore10003>
  );
};
