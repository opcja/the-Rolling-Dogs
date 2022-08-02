import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { Navigation } from "../components/Navigation/Navigation";
import { Button } from "../components/Button/Button";
import { FooterComponent } from "../components/Footer/Footer";

import PersonIcon from "../assets/icons/person-icon.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import MessageIcon from "../assets/icons/message.svg";
import PissingDogIcon from "../assets/icons/pissing-dog.svg";

const ContactWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  padding: 0 16px;
  margin: 40px 0 60px;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.h2};
    color: ${({ theme }) => theme.colors.orange500};
    font-weight: 900;
    letter-spacing: -0.02em;
  }

  p {
    text-align: center;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;

  span {
    font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
    color: ${({ theme }) => theme.colors.black500};
    font-family: "Lora", serif;
    letter-spacing: 0.04em;
    line-height: 160%;
  }
`;

const FormWrapper = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      display: flex;
      align-items: center;
      padding-left: 24px;
      border: 1px solid ${({ theme }) => theme.colors.green200};
      border-radius: 6px;

      svg {
        margin-top: 4px;
      }

      input,
      textarea {
        flex-grow: 1;
        border: none;
        padding: 18px 0;
        margin-left: 10px;
        font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
        font-family: "Lora", serif;
        letter-spacing: 0.04em;
        color: ${({ theme }) => theme.colors.black300};
        background-color: ${({ theme }) => theme.colors.yellow100};

        &:focus {
          outline: none;
        }
      }
    }

    div:nth-last-of-type(1) {
      padding: 18px 0 18px 24px;
      width: 100%;

      label {
        align-self: flex-start;
      }

      textarea {
        padding: 0;
        height: 130px;
      }
    }

    button {
      width: fit-content;
      align-self: flex-end;
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: -65px;
  left: 5%;
`;

const ContactPage = () => {
  return (
    <MainTemplate>
      <Navigation />
      <ContactWrapper>
        <h1>Kontakt</h1>
        <p>
          Tutaj możesz umówić się na konsultację lub zaklepać miejsce w psim
          hotelu.
        </p>
        <ContactDetails>
          <span>Ada</span>
          <span>therollingdogs@gmail.com</span>
          <span>733-863-222</span>
        </ContactDetails>
        <FormWrapper>
          <form name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
              <label>
                <PersonIcon />
              </label>
              <input type="text" name="name" placeholder="Imię*" />
            </div>
            <div>
              <label>
                <MailIcon />
              </label>
              <input type="email" name="email" placeholder="Adres email*" />
            </div>
            <div>
              <label>
                <PhoneIcon />
              </label>
              <input type="phone" name="phone" placeholder="Numer telefonu" />
            </div>
            <div>
              <label>
                <MessageIcon />
              </label>
              <textarea name="phone" placeholder="Wiadomość*" />
            </div>
            <Button
              type="submit"
              as="button"
              text="Wyślij"
              variant="primary"
            ></Button>
          </form>
        </FormWrapper>
        <IconWrapper>
          <PissingDogIcon />
        </IconWrapper>
      </ContactWrapper>
      <FooterComponent></FooterComponent>
    </MainTemplate>
  );
};

export default ContactPage;
