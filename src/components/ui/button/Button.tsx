import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 내 텍스트 */
  children: ReactNode;
}

const Button = ({ children, disabled = false, type = "button", ...rest }: ButtonProps) => {
  return (
    <S.StyledButton type={type} disabled={disabled} {...rest}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
