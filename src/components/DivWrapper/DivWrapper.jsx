import React from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  height: 34px;
  position: relative;
  width: 240px;

  & .text-wrapper {
    color: var(--white);
    font-family: "Roboto", Helvetica;
    font-size: 22px;
    font-weight: 600;
    height: 29px;
    left: 0;
    letter-spacing: 0;
    line-height: 28.6px;
    position: absolute;
    top: 2px;
    white-space: nowrap;
  }
`;

export const DivWrapper = ({ className }) => {
  return (
    <StyledDivWrapper className={`div-wrapper ${className}`}>
      <div className="text-wrapper">ЛОГОТИП КОМПАНИИ</div>
    </StyledDivWrapper>
  );
};
