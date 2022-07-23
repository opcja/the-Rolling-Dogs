import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { Navigation } from "../components/Navigation/Navigation";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../components/Button/Button";

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: ${({ theme }) => theme.font.size.mobile.h2};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.yellow100};
  letter-spacing: -2px;
  line-height: 100%;
  width: 86%;

  p {
    font-size: ${({ theme }) => theme.font.size.mobile.body};
    letter-spacing: 0.04em;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.yellow100};
    font-weight: normal;
    margin: 40px 0;
  }
`;

const Header = styled.header`
  height: calc(100vh - 50px);
  position: relative;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 16px;
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  height: 1500px;

  h3 {
    margin-top: 20px;
    font-size: ${({ theme }) => theme.font.size.mobile.h3};
    color: ${({ theme }) => theme.colors.green300};
    font-family: "Playfair Display", serif;
    font-weight: 800;
  }

  p {
    text-align: center;
    width: 78%;
    margin-top: 60px;
  }

  button {
    margin-top: 80px;
  }
`;

// markup
const IndexPage = () => {
  return (
    <MainTemplate>
      <Navigation></Navigation>
      <Header>
        <StaticImage
          src="../assets/images/homepage/mobile/hero.png"
          alt=""
          placeholder="blurred"
        />
        <ContentWrapper>
          <Title>
            Pozwól psu być psem
            <p>Treningi i konsultacje behawioralne</p>
          </Title>
          <Button as="a" href="/">
            Sprawdź ofertę
          </Button>
        </ContentWrapper>
      </Header>
      <AboutSection>
        <StaticImage
          src="../assets/images/homepage/mobile/o-mnie.png"
          alt="Ada - psi trener i behawiorysta"
          placeholder="blurred"
        />
        <h3>Cześć</h3>
        <p>
          Na imię mam Ada, prowadzę treningi oraz terapie psów z problemami
          behawioralnymi. Wbrew pozorom w większym stopniu pracuje z opiekunami
          niż z samymi psami. Zwracam uwagę na potrzeby i emocje psa oraz
          komunikację pies-pies, pies - człowiek. Najbardziej zależy mi, żeby
          opiekun stworzył z psiakiem relacje opartą na zaufaniu i partnerstwie.
          Jeśli mamy to, wtedy nauka to pikuś.{" "}
        </p>
        <Button>Więcej o mnie</Button>
      </AboutSection>
    </MainTemplate>
  );
};

export default IndexPage;
