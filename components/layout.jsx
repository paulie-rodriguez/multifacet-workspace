/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import Directory from "./directory";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div css={tw`w-full h-screen`}>
      <div
        className="graph"
        css={tw`w-full flex flex-row bg-red-100 justify-between`}
      >
        <div css={tw`max-w-6xl w-full grid grid-cols-2 pb-40`}>{children}</div>
        <Directory />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
