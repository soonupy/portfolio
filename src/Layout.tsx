// import Header from './Header'
// import Footer from './Footer'
import Main from "./Main";
import { DarkVeil } from "./library/OglEffect";

type LayoutProps = {
  children?: React.ReactNode; // ← ? 추가해서 optional로!
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="layout">
        {/* <Header /> */}
        <div className="background-effect">
          <DarkVeil hueShift={50} speed={3} />
        </div>
        <Main>{children}</Main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
