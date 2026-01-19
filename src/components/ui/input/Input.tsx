import type { InputHTMLAttributes } from "react";
import * as S from "./Input.styles";

type InputVariant = "default" | "error" | "success";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** 입력 필드 라벨 */
  label?: string;
  /** 에러 또는 도움말 메시지 */
  helperText?: string;
  /** 입력 필드 상태 */
  variant?: InputVariant;
  /** 필수 입력 여부 */
  required?: boolean;
}

const Input = ({
  label,
  helperText,
  variant = "default",
  required = false,
  id,
  disabled,
  ...rest
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const helperTextId = helperText ? `${inputId}-helper` : undefined;

  return (
    <S.Wrapper>
      {label && (
        <S.Label htmlFor={inputId}>
          {label}
          {required && <S.RequiredMark aria-hidden="true">*</S.RequiredMark>}
        </S.Label>
      )}
      <S.InputField
        id={inputId}
        variant={variant}
        disabled={disabled}
        aria-invalid={variant === "error"}
        aria-describedby={helperTextId}
        aria-required={required}
        {...rest}
      />
      {helperText && (
        <S.HelperText id={helperTextId} variant={variant}>
          {helperText}
        </S.HelperText>
      )}
    </S.Wrapper>
  );
};

export default Input;
