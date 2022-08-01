import styled, { css } from "styled-components";
import React from "react";

export const StyledButton = styled.button`
  border-radius: 5px;
  font-family: "Lora", serif;
  font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
  line-height: 160%;
  letter-spacing: 0.04em;
  border: none;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.orange500};
          padding: 12px 26px 13px;
          color: ${({ theme }) => theme.colors.yellow100};
        `;
      case "secondary":
        return css`
          display: flex;
          padding: 12px 24px 13px;
          background-color: transparent;
          color: ${({ theme }) => theme.colors.orange500};

          div {
            display: flex;
            width: 41px;
            overflow-x: hidden;
            justify-content: flex-end;
            margin-left: 24px;

            ::after {
              content: url("data:image/svg+xml,%3Csvg width='41' height='8' viewBox='0 0 41 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z' fill='%23E97926'/%3E%3C/svg%3E");
              display: block;
            }

            ::before {
              content: url("data:image/svg+xml,%3Csvg width='41' height='8' viewBox='0 0 41 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z' fill='%23E97926'/%3E%3C/svg%3E");
              display: block;
            }
          }
        `;
    }
  }}
`;

export const Button = ({ variant, text, as, href, type }) => {
  return (
    <StyledButton as={as} href={href} variant={variant} type={type}>
      {text}
      {variant === "secondary" ? <div></div> : null}
    </StyledButton>
  );
};
