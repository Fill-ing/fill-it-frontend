import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.layout.paddingY} ${theme.layout.paddingX}`};
`;
