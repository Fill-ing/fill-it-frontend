import type { ReactNode } from "react";
import * as S from "./SquareButton.styles";

interface SquareButtonProps {
  /** 버튼 색상 종류 */
  variant?: "primary" | "secondary";
  /** 아이콘 이미지 */
  icon: ReactNode;
  /** 버튼 아래 텍스트 */
  label: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
}

const SquareButton = ({ variant = "primary", icon, label, onClick }: SquareButtonProps) => {
  return (
    <S.Button variant={variant} onClick={onClick} type="button">
      <S.IconWrapper aria-hidden={true}>{icon}</S.IconWrapper>
      <S.Label variant={variant}>{label}</S.Label>
    </S.Button>
  );
};

export default SquareButton;
