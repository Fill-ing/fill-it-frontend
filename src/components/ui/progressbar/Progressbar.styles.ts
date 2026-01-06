import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.ol`
  display: inline-flex;
  gap: 4px;
  width: 100%;
`;

export const Step = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1;

  /* 마지막 Step은 내용물 크기만큼만 차지 (Line이 없으므로) */
  &:last-child {
    flex: 0 0 auto;
  }
`;

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const CompleteCircle = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const IncompleteCircle = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.primary100};
`;

export const CurrentCircle = styled(Circle)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
`;

export const BeatedCircle = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  transform-origin: center;
`;

export const Line = styled.div`
  height: 1px;
  flex:1;
  background-color: ${({ theme }) => theme.colors.gray500};
`;
