import React from "react";
import { NamecandidateNameFrameScore10001 } from "./sections/NamecandidateNameFrameScore10001";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import styled from "styled-components";

const StyledNamecandidateNameBlockScore10008 = styled.div`
  height: 1428px;
  left: 0;
  position: absolute;
  top: 830px;
  width: 1200px;
`;

export const NamecandidateNameBlockScore10008 = () => {
  return (
    <StyledNamecandidateNameBlockScore10008>
      <SectionComponentNode />
      <NamecandidateNameFrameScore10001 />
    </StyledNamecandidateNameBlockScore10008>
  );
};
