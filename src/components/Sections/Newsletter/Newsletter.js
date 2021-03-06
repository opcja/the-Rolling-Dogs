import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../Button/Button";
import NewsletterIcon from "../../../assets/icons/newsletter.svg";
import PersonIcon from "../../../assets/icons/person-icon.svg";
import MailIcon from "../../../assets/icons/mail-icon.svg";

const NewsletterSection = styled.section`
  position: relative;
  margin-bottom: 60px;

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
        background-color: ${({ theme }) => theme.colors.yellow100};

        &:focus {
          outline: none;
        }
      }
    }

    button {
      margin-top: 20px;
    }

    span {
      color: ${({ theme }) => theme.colors.black500};
      font-family: "Lora", serif;
      font-size: 11px;
      text-align: center;
      letter-spacing: 0.04em;
      line-height: 140%;
    }
  }
`;

export const NewsletterSectionComponent = ({ children }) => {
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
        Zapisz si?? a my b??dziemy informowac Ci?? co u nas s??ycha??, powiadomimy o
        nowych wpisach oraz promocjach na nasze szkolenia.
      </p>
      <FormWrapper>
        <form name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div>
            <label>
              <PersonIcon />
            </label>
            <input type="text" name="name" placeholder="Imi??" />
          </div>
          <div>
            <label>
              <MailIcon />
            </label>
            <input type="email" name="email" placeholder="Adres email" />
          </div>
          <Button type="submit" text="Zapisz si??" variant="primary" />
          <span>
            Do????czaj??c do newslettera wyra??asz zgod?? na przesy??anie na sw??j
            adres informacji o nowo??ciach, promocjach i produktach pochodz??cych
            od strefabezdiety.com. W ka??dej chwili mo??esz wypisa?? si?? z listy
            subskrybent??w.
          </span>
        </form>
      </FormWrapper>
      {children}
    </NewsletterSection>
  );
};
