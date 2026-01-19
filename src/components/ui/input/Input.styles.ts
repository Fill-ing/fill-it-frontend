import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/react";

type InputVariant = "default" | "error" | "success";

const getVariantStyles = (
  variant: InputVariant,
  colors: Record<string, string>,
): CSSObject => {
  const styles: Record<InputVariant, CSSObject> = {
    default: {
      borderColor: colors.gray500,
      "&:focus": {
        borderColor: colors.primary,
        outline: "none",
      },
    },
    error: {
      borderColor: colors.error,
      "&:focus": {
        borderColor: colors.error,
        outline: "none",
      },
    },
    success: {
      borderColor: colors.success,
      "&:focus": {
        borderColor: colors.success,
        outline: "none",
      },
    },
  };

  return styles[variant];
};

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
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid;
  background-color: transparent;
  font-size: ${({ theme }) => theme.typography.body2.size};
  font-weight: ${({ theme }) => theme.typography.body2.weight};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.2s ease;

  ${({ theme, variant }) => getVariantStyles(variant, theme.colors)};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.gray500};
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
