import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.orange500};
  border-radius: 5px;
  padding: 12px 26px 13px;
  font-family: "Lora", serif;
  font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
  border: none;
  color: ${({ theme }) => theme.colors.yellow100};
  letter-spacing: 0.04em;
`;
