import React from "react";
import { BlockWrapper } from "./sections/BlockWrapper/BlockWrapper";
import { NamecandidateNameBlockScore10001 } from "./sections/NamecandidateNameBlockScore10001";
import { NamecandidateNameBlockScore10002 } from "./sections/NamecandidateNameBlockScore10002";
import { NamecandidateNameBlockScore10003 } from "./sections/NamecandidateNameBlockScore10003";
import { NamecandidateNameBlockScore10004 } from "./sections/NamecandidateNameBlockScore10004";
import { NamecandidateNameBlockScore10005 } from "./sections/NamecandidateNameBlockScore10005";
import { NamecandidateNameBlockScore10006 } from "./sections/NamecandidateNameBlockScore10006";
import { NamecandidateNameBlockScore10007 } from "./sections/NamecandidateNameBlockScore10007";
import { NamecandidateNameBlockScore10008 } from "./sections/NamecandidateNameBlockScore10008";
import { NamecandidateNameBlockScore10009 } from "./sections/NamecandidateNameBlockScore10009";
import styled from "styled-components";

const StyledHomePageComputer = styled.div`
  background-color: #151515;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div-2 {
    background-color: var(--black);
    height: 9905px;
    position: relative;
    width: 1200px;
  }
`;

export const HomePageComputer = () => {
  return (
    <StyledHomePageComputer>
      <div className="div-2">
        <BlockWrapper />
        <NamecandidateNameBlockScore10001 />
        <NamecandidateNameBlockScore10002 />
        <NamecandidateNameBlockScore10003 />
        <NamecandidateNameBlockScore10004 />
        <NamecandidateNameBlockScore10005 />
        <NamecandidateNameBlockScore10006 />
        <NamecandidateNameBlockScore10007 />
        <NamecandidateNameBlockScore10008 />
        <NamecandidateNameBlockScore10009 />
      </div>
    </StyledHomePageComputer>
  );
};