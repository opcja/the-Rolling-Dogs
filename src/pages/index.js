import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { Navigation } from "../components/Navigation/Navigation";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../components/Button/Button";
import { Articles } from "../components/Articles/Articles";

import BlogIcon from "../assets/icons/about-2.svg";
import TreningsIcon from "../assets/icons/trenings.svg";
import TherapyIcon from "../assets/icons/therapy.svg";
import OnlineIcon from "../assets/icons/online.svg";
import WalkingDogIcon from "../assets/icons/walking-dog.svg";

import { HotelSectionComponent } from "../components/Sections/Hotel/Hotel";
import { NewsletterSectionComponent } from "../components/Sections/Newsletter/Newsletter";
import { FooterComponent } from "../components/Footer/Footer";

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

  div.gatsby-image-wrapper {
    height: 100%;
  }
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
  padding: 0 16px;

  h3 {
    margin-top: 20px;
    font-size: ${({ theme }) => theme.font.size.mobile.h3};
    color: ${({ theme }) => theme.colors.green300};
    font-family: "Playfair Display", serif;
    font-weight: 800;
  }

  p {
    text-align: center;
    width: 92%;
    margin-top: 60px;
  }

  a {
    margin-top: 80px;
  }
`;

const BlogSection = styled.section`
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 0 16px;
  position: relative;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.h3};
    color: ${({ theme }) => theme.colors.green300};
    font-weight: 800;
  }

  h2::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.green300};
    margin-top: 10px;
    margin-bottom: 60px;
  }
`;

const BlogIconWrapper = styled.div`
  position: absolute;
  right: 22px;
  top: 6px;

  svg {
    width: 72px;
    height: 57px;
  }
`;

const OfferSection = styled.section`
  background-color: ${({ theme }) => theme.colors.green400};
  padding: 40px 16px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.orange400};
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.h3};
    align-self: flex-start;
    width: 100%;
  }

  h2::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.orange400};
    margin-top: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    :nth-of-type(1) {
      margin-top: 80px;
    }

    h3 {
      margin-top: 20px;
      margin-bottom: 40px;
      color: ${({ theme }) => theme.colors.yellow100};
      font-size: ${({ theme }) => theme.font.size.mobile.h4};
      text-align: center;
      font-family: "Playfair Display", serif;
    }

    p {
      color: ${({ theme }) => theme.colors.yellow100};
      text-align: center;
    }
  }
  a {
    display: block;
    margin-top: 120px;
    width: fit-content;
  }
`;

const WlakingDogIconWrapper = styled.div`
  position: absolute;
  right: 22px;
  bottom: -61px;
  transform: scaleX(-1);
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
          <Button
            as="a"
            href="/oferta"
            variant="primary"
            text="Sprawdź ofertę"
          />
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
        <Button as="a" href="/" variant="primary" text="Czytaj więcej" />
      </AboutSection>
      <BlogSection>
        <h2>Blog</h2>
        <BlogIconWrapper>
          <BlogIcon />
        </BlogIconWrapper>
        <Articles></Articles>
      </BlogSection>
      <OfferSection>
        <h2>Oferta</h2>

        <ul>
          <li>
            <TreningsIcon />
            <h3>Szkolenia grupowe oraz indywidualne</h3>
            <p>
              Razem raźniej 🙂 Zajęcia odbywają się raz w tygodniu. Uczymy się
              podstawowych umiejętności, ale pracujemy tez nad komunikacją. Są
              trzy kategorie wiekowe: szczeniaki, starszaki i psy dorosłe.
              Wszystkie psiaki mile widziane!
            </p>
          </li>
          <li>
            <TherapyIcon />
            <h3>Terapie behawioralne</h3>
            <p>
              Pracujemy indywidualnie nad problemami, takimi jak zachowania
              agresywne, reaktywność, pobudliwość, lęki. Uczmy się o problemach
              i emocjach psów oraz jak wspierać naszych czworonożnych
              przyjaciół.
            </p>
          </li>
          <li>
            <OnlineIcon />
            <h3>Konsultacja online</h3>
            <p>
              Dla zabieganych - wartościowa wiedza i porady bez wychodzenia z
              domu.
            </p>
          </li>
        </ul>
        <Button
          as="a"
          href="/oferta"
          variant="primary"
          text="Przejdź do oferty"
        />
      </OfferSection>
      <HotelSectionComponent></HotelSectionComponent>
      <NewsletterSectionComponent>
        <WlakingDogIconWrapper>
          <WalkingDogIcon />
        </WlakingDogIconWrapper>
      </NewsletterSectionComponent>
      <FooterComponent></FooterComponent>
    </MainTemplate>
  );
};

export default IndexPage;
