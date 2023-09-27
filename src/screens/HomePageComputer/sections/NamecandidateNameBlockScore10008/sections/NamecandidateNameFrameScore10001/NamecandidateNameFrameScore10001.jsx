import React from "react";
import { Div } from "./sections/Div";
import { Overlap } from "./sections/Overlap";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import styled from "styled-components";

const StyledNamecandidateNameFrameScore10001 = styled.div`
  background-color: var(--black);
  height: 1188px;
  left: 0;
  position: absolute;
  top: 240px;
  width: 1200px;
`;

export const NamecandidateNameFrameScore10001 = () => {
  return (
    <StyledNamecandidateNameFrameScore10001>
      <Overlap />
      <OverlapWrapper />
      <OverlapGroupWrapper />
      <Div />
    </StyledNamecandidateNameFrameScore10001>
  );
};
