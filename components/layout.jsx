/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import Directory from "./directory";
import Window from "./window";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div css={tw`w-full h-screen overflow-hidden`}>
      <div css={tw`w-full flex flex-row bg-teal-100`}>
        <div css={tw`w-3/4`}>
          <Window />
          {children}
        </div>
        <Directory />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
