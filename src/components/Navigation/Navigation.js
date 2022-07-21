import React from "react";
import styled from "styled-components";
import LogoHorizontal from "assets/icons/logo/logo-horizontal.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.yellow100};
`;

const StyledLogoWrapper = styled.span`
  svg {
    width: 155px;
    height: 32px;
  }
`;

const StyledLogo = ({ children }) => (
  <StyledLogoWrapper>{children}</StyledLogoWrapper>
);

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledLogo>
        <LogoHorizontal />
      </StyledLogo>
    </Wrapper>
  );
};
