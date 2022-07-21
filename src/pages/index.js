import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { Navigation } from "../components/Navigation/Navigation";

const Title = styled.h1``;

// markup
const IndexPage = () => {
  return (
    <MainTemplate>
      <Navigation></Navigation>
      <Title>the Rolling Dogs</Title>
    </MainTemplate>
  );
};

export default IndexPage;
