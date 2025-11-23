import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  touch-action: none;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Track = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  flex-shrink: 0;
  max-width: ${({ theme }) => theme.layout.width};
  user-select: none;            
`;
