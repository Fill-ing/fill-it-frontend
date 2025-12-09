import { Outlet } from "react-router-dom";
import * as S from "./Layout.styles";

const Layout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default Layout;
