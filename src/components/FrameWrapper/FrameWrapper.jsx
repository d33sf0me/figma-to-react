import React from "react";
import styled from "styled-components";

const StyledFrameWrapper = styled.div`
  background-color: var(--black);
  border: 1px solid;
  border-color: var(--grey);
  border-radius: 10px;
  height: 70px;
  overflow: hidden;
  position: relative;
  width: 181px;

  & .text-wrapper-16 {
    color: var(--white);
    font-family: var(--button-font-family);
    font-size: var(--button-font-size);
    font-style: var(--button-font-style);
    font-weight: var(--button-font-weight);
    height: 21px;
    left: 0;
    letter-spacing: var(--button-letter-spacing);
    line-height: var(--button-line-height);
    position: absolute;
    text-align: center;
    top: 23px;
    width: 181px;
  }
`;

export const FrameWrapper = ({ className }) => {
  return (
    <StyledFrameWrapper className={`frame-wrapper ${className}`}>
      <div className="text-wrapper-16">ПОДРОБНЕЕ</div>
    </StyledFrameWrapper>
  );
};
