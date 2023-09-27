import React from "react";
import styled from "styled-components";

const StyledGroupWrapper = styled.div`
  background-color: #aa63c1;
  border-radius: 7.5px;
  height: 15px;
  width: 15px;

  & .group-7 {
    height: 7px;
    left: 4px;
    position: relative;
    top: 4px;
    width: 7px;
  }

  & .overlap-group-4 {
    height: 7px;
    position: relative;
  }

  & .rectangle-6 {
    background-color: var(--white);
    height: 1px;
    left: 0;
    position: absolute;
    top: 3px;
    width: 7px;
  }

  & .rectangle-7 {
    background-color: var(--white);
    height: 1px;
    left: 0;
    position: absolute;
    top: 3px;
    transform: rotate(-90deg);
    width: 7px;
  }
`;

export const GroupWrapper = ({ className }) => {
  return (
    <StyledGroupWrapper className={`group-wrapper ${className}`}>
      <div className="group-7">
        <div className="overlap-group-4">
          <div className="rectangle-6" />
          <div className="rectangle-7" />
        </div>
      </div>
    </StyledGroupWrapper>
  );
};
