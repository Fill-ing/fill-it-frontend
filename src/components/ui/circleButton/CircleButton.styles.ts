import styled from "@emotion/styled";

export const Button = styled.button<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 48px;
  min-height: 48px;
  border: none;
  border-radius: 999px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  transition: filter 0.15s ease;

  &:active {
    filter: brightness(0.9);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary400};
    outline-offset: 2px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
