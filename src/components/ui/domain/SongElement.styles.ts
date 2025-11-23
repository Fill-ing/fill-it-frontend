import styled from "@emotion/styled";
import { hexToRgba } from "../../../utils/hexToRgba";

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => hexToRgba(theme.colors.gray900, 0.7)};
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Cover = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  -webkit-user-drag: none; 
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 12px;
  min-width:0;
  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  min-width: 0;
`;

export const Title = styled.h3`
${({ theme }) => ({ ...theme.typography.body1 })};
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.p`
  ${({ theme }) => ({ ...theme.typography.body2 })};
  color: ${({ theme }) => theme.colors.gray400};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const DragHandle = styled.div`
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const Icon = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray400}
`;
