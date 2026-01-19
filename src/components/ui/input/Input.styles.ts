import styled from "@emotion/styled";
import { hexToRgba } from "../../../utils/hexToRgba";

type InputVariant = "default" | "error" | "success";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.body1.size};
  font-weight: ${({ theme }) => theme.typography.body1.weight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  color: ${({ theme }) => theme.colors.white};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 4px;
`;

export const InputField = styled.input<{ variant: InputVariant }>`
  width: 100%;
  padding: 12px 8px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => hexToRgba(theme.colors.gray900, 0.7)};
  font-size: ${({ theme }) => theme.typography.body1.size};
  font-weight: ${({ theme }) => theme.typography.body1.weight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: ${({ theme, variant }) => {
      if (variant === "error") return `2px solid ${theme.colors.error}`;
      if (variant === "success") return `2px solid ${theme.colors.success}`;
      return `2px solid ${theme.colors.primary}`;
    }};
    outline-offset: -2px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const HelperText = styled.p<{ variant: InputVariant }>`
  font-size: ${({ theme }) => theme.typography.caption.size};
  font-weight: ${({ theme }) => theme.typography.caption.weight};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  color: ${({ theme, variant }) => {
    if (variant === "error") return theme.colors.error;
    if (variant === "success") return theme.colors.success;
    return theme.colors.gray500;
  }};
  margin: 0;
`;
