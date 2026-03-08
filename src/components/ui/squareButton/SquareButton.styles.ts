import styled from "@emotion/styled";

type SquareButtonVariant = "primary" | "secondary";

export const Button = styled.button<{ variant: SquareButtonVariant }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 128px;
  height: 128px;
  padding: 20px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.white};

  &:active {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.primaryDark : theme.colors.gray200};
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
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`;

export const Label = styled.span<{ variant: SquareButtonVariant }>`
  ${({ theme }) => ({ ...theme.typography.button1 })};
  letter-spacing: -0.4px;
  color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.gray500 : theme.colors.white};
`;
