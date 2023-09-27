import React from "react";
import { DivWrapper } from "../DivWrapper/DivWrapper";
import styled from "styled-components";

const StyledMenu = styled.div`
  height: 70px;
  width: 1200px;

  & .group-8 {
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 70px;
    left: 20px;
    position: relative;
    width: 1160px;
  }

  & .group-9 {
    height: 40px;
    left: 29px;
    position: relative;
    top: 14px;
    width: 1120px;
  }

  & .frame-7 {
    height: 40px;
    left: 346px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 148px;
  }

  & .text-wrapper-17 {
    color: var(--grey);
    font-family: "Roboto", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: -26px;
    letter-spacing: 0;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 10px;
    width: 200px;
  }

  & .frame-8 {
    height: 40px;
    left: 643px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 148px;
  }

  & .frame-9 {
    height: 40px;
    left: 899px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 133px;
  }

  & .text-wrapper-18 {
    color: var(--grey);
    font-family: "Roboto", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: -34px;
    letter-spacing: 0;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 10px;
    width: 200px;
  }

  & .frame-10 {
    height: 40px;
    left: 494px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 149px;
  }

  & .frame-11 {
    height: 40px;
    left: 792px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 107px;
  }

  & .text-wrapper-19 {
    color: var(--grey);
    font-family: "Roboto", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: -26px;
    letter-spacing: 0;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 10px;
    width: 160px;
  }

  & .frame-12 {
    height: 40px;
    left: 1032px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 88px;
  }

  & .text-wrapper-20 {
    color: var(--grey);
    font-family: "Roboto", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: -36px;
    letter-spacing: 0;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 10px;
    width: 160px;
  }

  & .component-676-instance {
    left: 0 !important;
    position: absolute !important;
    top: 3px !important;
    width: 237px !important;
  }
`;

export const Menu = ({ className }) => {
  return (
    <StyledMenu className={`menu ${className}`}>
      <div className="group-8">
        <div className="group-9">
          <div className="frame-7">
            <div className="text-wrapper-17">НАШИ УСЛУГИ</div>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-17">БЕЗОПАСНОСТЬ</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-18">НАШИ КЕЙСЫ</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-17">КАК МЫ РАБОТАЕМ</div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-19">ОТЗЫВЫ</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-20">О НАС</div>
          </div>
          <DivWrapper className="component-676-instance" />
        </div>
      </div>
    </StyledMenu>
  );
};