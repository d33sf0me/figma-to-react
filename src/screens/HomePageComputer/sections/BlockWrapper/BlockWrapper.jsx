import React from "react";
import { Block } from "../../../../components/Block";
import styled from "styled-components";

const StyledBlockWrapper = styled.div`
  left: 0 !important;
  position: absolute !important;
  top: 9148px !important;
`;

export const BlockWrapper = () => {
  return (
    <StyledBlockWrapper>
      <Block
        className="block-10"
        img="/img/vector-2.svg"
        neonYoungManUsing="/img/neon-young-man-using-biometric-authentication-1.png"
        vector="/img/vector-1.svg"
      />
    </StyledBlockWrapper>
  );
};
