import type { MouseEventHandler, ReactNode } from "react";
import * as S from "./CircleButton.styles";

interface CircleButtonProps {
  /** 버튼 배경색 (hex) */
  backgroundColor: string;
  /** 버튼 내부 아이콘 */
  icon: ReactNode;
  /** 접근성 레이블 */
  "aria-label": string;
  /** 클릭 이벤트 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CircleButton = ({ backgroundColor, icon, "aria-label": ariaLabel, onClick }: CircleButtonProps) => {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      aria-label={ariaLabel}
      onClick={onClick}
      type="button"
    >
      <S.IconWrapper aria-hidden={true}>{icon}</S.IconWrapper>
    </S.Button>
  );
};

export default CircleButton;
