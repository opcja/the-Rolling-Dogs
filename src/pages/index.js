import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";

const Title = styled.h1`
  font-size: 100px;
  color: ${({ theme }) => theme.colors.black};
`;

// markup
const IndexPage = () => {
  return (
    <MainTemplate>
      <Title>the Rolling Dogs</Title>
    </MainTemplate>
  );
};

export default IndexPage;
