import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../Button/Button";
import NewsletterIcon from "../../../assets/icons/newsletter.svg";
import PersonIcon from "../../../assets/icons/person-icon.svg";
import MailIcon from "../../../assets/icons/mail-icon.svg";

const NewsletterSection = styled.section`
  position: relative;

  h2 {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${({ theme }) => theme.font.size.mobile.h3};
    font-family: "Playfair display", serif;
    color: ${({ theme }) => theme.colors.yellow100};
    font-weight: 800;
  }

  p {
    width: 90%;
    position: absolute;
    top: 370px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: ${({ theme }) => theme.colors.yellow100};
  }
`;

const FormWrapper = styled.div`
  margin-top: 40px;
  padding: 0 16px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    svg {
      margin-top: 3px;
    }

    div {
      display: flex;
      align-items: center;
      padding-left: 24px;
      border: 1px solid ${({ theme }) => theme.colors.green200};
      border-radius: 6px;

      input {
        flex-grow: 1;
        border: none;
        padding: 18px 0;
        margin-left: 10px;
        font-size: ${({ theme }) => theme.font.size.mobile.caption};
        font-family: "Lora", serif;
        letter-spacing: 0.04em;
        color: ${({ theme }) => theme.colors.black500};

        &:focus {
          outline: none;
        }
      }
    }

    button {
      margin-top: 20px;
    }

    span {
      font-size: ${({ theme }) => theme.font.size.mobile.caption};
      color: ${({ theme }) => theme.colors.black500};
      font-family: "Lora", serif;
      font-size: 12px;
      text-align: center;
      letter-spacing: 0.04em;
      line-height: 140%;
    }
  }
`;

export const NewsletterSectionComponent = () => {
  return (
    <NewsletterSection>
      <StaticImage
        src="../../../assets/images/homepage/mobile/newsletter.png"
        alt=""
        placeholder="blurred"
      />
      <h2>
        <span>News</span>
        <NewsletterIcon />
        <span>etter</span>
      </h2>
      <p>
        Zapisz się a my będziemy informowac Cię co u nas słychać, powiadomimy o
        nowych wpisach oraz promocjach na nasze szkolenia.
      </p>
      <FormWrapper>
        <form
          name="newsletter"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div>
            <PersonIcon />
            <input type="text" placeholder="Imię" name="name" />
          </div>
          <div>
            <MailIcon />
            <input type="email" placeholder="Adres email" name="email" />
          </div>
          <Button type="submit" text="Zapisz się" variant="primary" />
          <span>
            Dołączając do newslettera wyrażasz zgodę na przesyłanie na swój
            adres informacji o nowościach, promocjach i produktach pochodzących
            od strefabezdiety.com. W każdej chwili możesz wypisać się z listy
            subskrybentów.
          </span>
        </form>
      </FormWrapper>
    </NewsletterSection>
  );
};
