import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { Navigation } from "../components/Navigation/Navigation";
import { Button } from "../components/Button/Button";

import TreningsIcon from "../assets/icons/trenings.svg";
import TherapyIcon from "../assets/icons/therapy.svg";
import OnlineIcon from "../assets/icons/online.svg";
import HotelIcon from "../assets/icons/hoteloferta.svg";
import StandingDogIcon from "../assets/icons/standing-dog.svg";
import RotatingDogIcon from "../assets/icons/rotating-dog.svg";
import { FooterComponent } from "../components/Footer/Footer";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.orange100};
  padding: 80px 16px;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.h2};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.green300};
    width: 100%;
    text-align: center;
  }

  span {
    font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
    display: block;
    color: ${({ theme }) => theme.colors.black500};
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 160%;
    margin-top: 20px;
    font-family: "Lora", serif;
  }
`;

const OffersWrapper = styled.section`
  padding: 0 16px;

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    margin-top: 80px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-bottom: 60px;
      border-bottom: 2px dashed ${({ theme }) => theme.colors.green300};

      &:nth-last-of-type(1) {
        border-bottom: none;
      }

      svg {
        height: 58px;
        width: 62px;
      }

      h2 {
        margin-top: 20px;
        color: ${({ theme }) => theme.colors.green400};
        font-size: ${({ theme }) => theme.font.size.mobile.h4};
        font-weight: 700;
        line-height: 120%;
        text-align: center;
      }

      p {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
      }

      span {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.font.size.mobile.body};
        color: ${({ theme }) => theme.colors.green500};
      }
    }
  }
`;

const ContactSection = styled.section`
  position: relative;
  padding: 80px 16px;
  background-color: ${({ theme }) => theme.colors.orange100};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.green400};
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.mobile.h4};
    font-weight: 700;
    line-height: 120%;
    width: 95%;

    span {
      display: block;
    }
  }
  a {
    margin-top: 60px;
  }

  svg {
    position: absolute;
  }

  svg:nth-of-type(1) {
    width: 26px;
    height: 50px;
    top: 5%;
    right: 8%;
  }

  svg:nth-of-type(2) {
    width: 32px;
    height: 52px;
    bottom: 26%;
    left: 4%;
  }
`;

// const IconWrapper = styled.div`
//   position: absolute;
//   top: 20%;
//   bottom: 20%;

// `;

const OfferPage = () => {
  return (
    <MainTemplate>
      <Navigation></Navigation>
      <Header>
        <h1>
          Oferta
          <span>
            Ja bym tutaj dał jakiś zachęcający tekścik, na mobile może być
            krótszy.
          </span>
        </h1>
      </Header>
      <OffersWrapper>
        <ul>
          <li>
            <TreningsIcon />
            <h2>Treningi grupowe oraz indywidualne</h2>
            <p>
              Dlaczego warto wysłać psa na wakacje własnie do nas? Bo znamy się
              na psach i rozumiemy je. Wasze psiaki nie będa zamykane na całe
              dnie. Organizujemy aktywne spacery, wypady nad jezioro, kopanie
              dziur i taplanie się w kałużach. Wszystko po to by w moim hotelu
              pies czuł się dobrze. Jego potrzeby były spełnione i żeby wrócił
              do domu zmęczony, ale szczęśliwy.
            </p>
            <span>Cena: 80zł/godzina</span>
          </li>
          <li>
            <TherapyIcon />
            <h2>Terapie behawioralne</h2>
            <p>
              Dlaczego warto wysłać psa na wakacje własnie do nas? Bo znamy się
              na psach i rozumiemy je. Wasze psiaki nie będa zamykane na całe
              dnie. Organizujemy aktywne spacery, wypady nad jezioro, kopanie
              dziur i taplanie się w kałużach. Wszystko po to by w moim hotelu
              pies czuł się dobrze. Jego potrzeby były spełnione i żeby wrócił
              do domu zmęczony, ale szczęśliwy.
            </p>
            <span>Cena: 80zł/godzina</span>
          </li>
          <li>
            <OnlineIcon />
            <h2>Konsultacje online</h2>
            <p>
              Dlaczego warto wysłać psa na wakacje własnie do nas? Bo znamy się
              na psach i rozumiemy je. Wasze psiaki nie będa zamykane na całe
              dnie. Organizujemy aktywne spacery, wypady nad jezioro, kopanie
              dziur i taplanie się w kałużach. Wszystko po to by w moim hotelu
              pies czuł się dobrze. Jego potrzeby były spełnione i żeby wrócił
              do domu zmęczony, ale szczęśliwy.
            </p>
            <span>Cena: 80zł/godzina</span>
          </li>
          <li>
            <HotelIcon />
            <h2>Hotel dla psów</h2>
            <p>
              Dlaczego warto wysłać psa na wakacje własnie do nas? Bo znamy się
              na psach i rozumiemy je. Wasze psiaki nie będa zamykane na całe
              dnie. Organizujemy aktywne spacery, wypady nad jezioro, kopanie
              dziur i taplanie się w kałużach. Wszystko po to by w moim hotelu
              pies czuł się dobrze. Jego potrzeby były spełnione i żeby wrócił
              do domu zmęczony, ale szczęśliwy.
            </p>
            <span>Cena: 80zł/godzina</span>
          </li>
        </ul>
      </OffersWrapper>
      <ContactSection>
        <h2>
          <span>Zainteresowany?</span>
          <span>Napisz do nas lub zadzwoń!</span>
        </h2>
        <Button as="a" variant="secondary" text="Czytaj więcej"></Button>
        <RotatingDogIcon />
        <StandingDogIcon />
      </ContactSection>
      <FooterComponent></FooterComponent>
    </MainTemplate>
  );
};

export default OfferPage;
