import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { Navigation } from "../components/Navigation/Navigation";

const Title = styled.h1``;

const Dupa = styled.div`
  height: 600px;
  color: red;
`;

// markup
const IndexPage = () => {
  return (
    <MainTemplate>
      <Navigation></Navigation>
      <Dupa>
        <Title>the Rolling Dogs</Title>
      </Dupa>
    </MainTemplate>
  );
};

export default IndexPage;
