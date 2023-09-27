import PropTypes from "prop-types";
import React from "react";
import { Group } from "../Group/Group";
import styled from "styled-components";

const StyledReviews = styled.div`
  background-color: var(--black);
  height: 480px;
  position: relative;
  width: 1200px;

  & .group-92 {
    left: 80px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .group-instance {
    left: 440px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .group-92-instance {
    left: 800px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .uil-arrow-wrapper {
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 20px;
    height: 40px;
    left: 1140px;
    position: absolute;
    top: 210px;
    width: 40px;
  }

  & .uil-arrow {
    height: 17px;
    left: 8px;
    position: absolute;
    top: 11px;
    width: 17px;
  }

  & .img-wrapper {
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 20px;
    height: 40px;
    left: 20px;
    position: absolute;
    top: 210px;
    width: 40px;
  }

  & .uil-arrow-2 {
    height: 17px;
    left: 12px;
    position: absolute;
    top: 11px;
    width: 17px;
  }
`;

export const Reviews = ({ className, uilArrow = "/img/uil-arrow-5.svg", img = "/img/uil-arrow-4.svg" }) => {
  return (
    <StyledReviews className={`reviews ${className}`}>
      <Group className="group-92" />
      <Group className="group-instance" />
      <Group className="group-92-instance" />
      <div className="uil-arrow-wrapper">
        <img className="uil-arrow" alt="Uil arrow" src={uilArrow} />
      </div>
      <div className="img-wrapper">
        <img className="uil-arrow-2" alt="Uil arrow" src={img} />
      </div>
    </StyledReviews>
  );
};

Reviews.propTypes = {
  uilArrow: PropTypes.string,
  img: PropTypes.string,
};