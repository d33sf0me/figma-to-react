import React from "react";
import styled from "styled-components";

const StyledFrame = styled.div`
  background-color: var(--black);
  border: 1px solid;
  border-color: var(--grey);
  border-radius: 10px;
  height: 70px;
  overflow: hidden;
  position: relative;
  width: 180px;

  & .text-wrapper-15 {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 21px;
    left: -7px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 23px;
    width: 194px;
  }
`;

export const Frame = ({ className }) => {
  return (
    <StyledFrame className={`frame ${className}`}>
      <div className="text-wrapper-15">ЗАКАЗАТЬ УСЛУГУ</div>
    </StyledFrame>
  );
};
