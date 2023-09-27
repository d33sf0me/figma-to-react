import React from "react";
import styled from "styled-components";

const StyledSectionComponentNode = styled.div`
  background-color: var(--black);
  height: 200px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1200px;

  & .text-wrapper-41 {
    color: var(--grey);
    font-family: "Roboto", Helvetica;
    font-size: 18px;
    font-weight: 400;
    left: 1051px;
    letter-spacing: 0;
    line-height: 23.4px;
    position: absolute;
    top: 26px;
    white-space: nowrap;
  }

  & .text-wrapper-42 {
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
  }

  & .text-wrapper-43 {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
    background-clip: text;
    color: transparent;
    font-family: "Roboto", Helvetica;
    font-size: 50px;
    font-weight: 600;
    left: 20px;
    letter-spacing: 0;
    line-height: 60px;
    position: absolute;
    text-fill-color: transparent;
    top: 139px;
    white-space: nowrap;
  }

  & .arrow {
    height: 7px;
    left: 820px;
    object-fit: cover;
    position: absolute;
    top: 34px;
    width: 212px;
  }
`;

export const SectionComponentNode = () => {
  return (
    <StyledSectionComponentNode>
      <div className="text-wrapper-41">НАШИ УСЛУГИ</div>
      <div className="text-wrapper-42">
        МЫ ЗАНИМАЕМСЯ
        <br />
        МОНЕТИЗАЦИЕЙ САЙТОВ
      </div>
      <div className="text-wrapper-43">ОТ А ДО Я</div>
      <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
    </StyledSectionComponentNode>
  );
};
