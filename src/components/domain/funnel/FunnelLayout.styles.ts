import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Header = styled.header``;

export const Content = styled.main`
  flex: 1;
  overflow-y: auto;
`;

export const Title = styled.h1`
  ${({ theme }) => ({ ...theme.typography.head2 })};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width};
  padding: 16px ${({ theme }) => theme.layout.paddingX} 32px;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.background} 80%,
    transparent 100%
  );
`;

// TODO : 버튼 공통 컴포넌트 제작 및 분리
export const NextButton = styled.button`
${({ theme }) => theme.typography.button1}
  width: 100%;
  padding: 12px 0;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 0.2s ease;


  &:active {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary400};
    outline-offset: 2px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;
