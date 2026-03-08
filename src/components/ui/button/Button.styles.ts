import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => ({ ...theme.typography.button1 })};
  letter-spacing: -0.4px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray700};
  }
`;
