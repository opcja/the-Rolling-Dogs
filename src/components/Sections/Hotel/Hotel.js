import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../Button/Button";
import HotelIcon from "../../../assets/icons/hotel.svg";

const HotelSection = styled.section`
  position: relative;
  h2 {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${({ theme }) => theme.font.size.mobile.h1};
    font-family: "Playfair display", serif;
    color: ${({ theme }) => theme.colors.green300};
    font-weight: 900;
    letter-spacing: -0.02em;
  }
`;

const TextAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  text-align: center;
  position: absolute;
  top: 74%;
  left: 50%;
  transform: translateX(-50%);

  a {
    margin-top: 60px;
  }
`;

export const HotelSectionComponent = () => {
  return (
    <HotelSection>
      <StaticImage
        src="../assets/images/homepage/mobile/hotel.png"
        alt=""
        placeholder="blurred"
      />
      <h2>
        <span>Psi h</span>
        <HotelIcon />
        <span>tel</span>
      </h2>
      <TextAndButton>
        {" "}
        <p>
          Jeśli musisz zostawić pupila na jakiś czas, pozwól zaopiekować się nim
          profesjonaliście.
        </p>
        <Button as="a" href="/" variant="primary" text="Sprawdź ofertę" />
      </TextAndButton>
    </HotelSection>
  );
};
