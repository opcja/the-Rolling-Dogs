import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../Button/Button";
import NewsletterIcon from "../../../assets/icons/newsletter.svg";
import PersonIcon from "../../../assets/icons/person-icon.svg";
import MailIcon from "../../../assets/icons/mail-icon.svg";
import SuccessIcon from "../../../assets/icons/success-icon.svg";
import ErrorIcon from "../../../assets/icons/error-icon.svg";

let isNameCorrect = false;
let isEmailCorrect = false;

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

    svg {
      margin-top: 3px;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 24px;
      border: 1px solid ${({ theme }) => theme.colors.green200};
      border-radius: 6px;
      margin-bottom: 40px;

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

      .success-icon,
      .error-icon {
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        height: 18px;

        svg {
          margin-top: 0px;
        }
      }

      span {
        display: none;
        position: absolute;
        bottom: -20px;
        left: 0;
        color: ${({ theme }) => theme.colors.error};
      }
    }

    .correct-validation {
      border-color: ${({ theme }) => theme.colors.success};

      .success-icon {
        display: block;
      }
    }

    .incorrect-validation {
      border-color: ${({ theme }) => theme.colors.error};

      .error-icon,
      span {
        display: block;
      }
    }

    button {
      position: relative;
      margin: 4px 0 20px;
    }

    button.form-is-correct {
      &::before {
        position: absolute;
        top: -26px;
        left: 0;
        content: "Dzięki, zostałeś zapisany! :)";
        display: block;
        color: ${({ theme }) => theme.colors.success};
        font-size: ${({ theme }) => theme.font.size.mobile.caption};
      }
    }

    button.form-is-incorrect {
      &::before {
        position: absolute;
        top: -26px;
        left: 0;
        content: "Najpierw wypełnij poprawnie formularz.";
        display: block;
        color: ${({ theme }) => theme.colors.error};
        font-size: ${({ theme }) => theme.font.size.mobile.caption};
      }
    }

    span {
      color: ${({ theme }) => theme.colors.black500};
      font-family: "Lora", serif;
      font-size: 11px;
      text-align: center;
      letter-spacing: 0.04em;
      line-height: 140%;
    }

    /* span.sent-form-message {
      opacity: 0;
      text-align: left;
      color: ${({ theme }) => theme.colors.success};
      font-size: ${({ theme }) => theme.font.size.mobile.caption};
    } */
  }
`;

export const NewsletterSectionComponent = ({ children }) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setInputNameValue(e.target.value);

        if (e.target.value.length > 2) {
          isNameCorrect = true;
          e.target.parentElement.classList.add("correct-validation");
          e.target.parentElement.classList.remove("incorrect-validation");
        } else {
          isNameCorrect = false;
          e.target.parentElement.classList.remove("correct-validation");
        }
        break;
      case "email":
        setInputEmailValue(e.target.value);

        if (
          e.target.value.includes("@") &&
          e.target.value.includes(".") &&
          e.target.value.length > 6
        ) {
          isEmailCorrect = true;
          e.target.parentElement.classList.add("correct-validation");
          e.target.parentElement.classList.remove("incorrect-validation");
        } else {
          isEmailCorrect = false;
          e.target.parentElement.classList.remove("correct-validation");
        }
        break;
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "name":
        if (e.target.value.length < 3) {
          isNameCorrect = false;
          e.target.parentElement.classList.add("incorrect-validation");
        }
        break;
      case "email":
        if (
          !(
            e.target.value.includes("@") &&
            e.target.value.includes(".") &&
            e.target.value.length > 6
          )
        ) {
          isEmailCorrect = false;
          e.target.parentElement.classList.add("incorrect-validation");
        }
        break;
    }
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    if (isEmailCorrect && isNameCorrect) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": e.target.getAttribute("name"),
          inputNameValue,
          inputEmailValue,
        }),
      })
        .then(() => {
          document
            .querySelector("form>button")
            .classList.remove("form-is-incorrect");
          document
            .querySelector("form>button")
            .classList.add("form-is-correct");
        })
        .catch((error) => alert(error));
    } else {
      document.querySelector("form>button").classList.remove("form-is-correct");
      document.querySelector("form>button").classList.add("form-is-incorrect");
    }
  };

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
          name="Newsletter Form"
          method="POST"
          action=""
          data-netlify="true"
          onSubmit={handleSumbit}
        >
          <input type="hidden" name="form-name" value="Newsletter Form" />
          <div class="input-wrapper">
            <label>
              <PersonIcon />
            </label>
            <input
              type="text"
              name="name"
              placeholder="Imię"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div class="success-icon">
              <SuccessIcon />
            </div>
            <div class="error-icon">
              <ErrorIcon />
            </div>
            <span>Imię musi być dłuższe niż 3 znaki</span>
          </div>
          <div class="input-wrapper">
            <label>
              <MailIcon />
            </label>
            <input
              type="email"
              name="email"
              placeholder="Adres email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div class="success-icon">
              <SuccessIcon />
            </div>
            <div class="error-icon">
              <ErrorIcon />
            </div>
            <span>Wpisz poprawny adres e-mail</span>
          </div>
          {/* <span class="sent-form-message">Dzięki, zostałeś zapisany! :)</span> */}
          <Button type="submit" text="Zapisz się" variant="primary" />
          <span>
            Dołączając do newslettera wyrażasz zgodę na przesyłanie na swój
            adres informacji o nowościach, promocjach i produktach pochodzących
            od The Rolling Dogs. W każdej chwili możesz wypisać się z listy
            subskrybentów.
          </span>
        </form>
      </FormWrapper>
      {children}
    </NewsletterSection>
  );
};
