/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";

const Footer=()=>{
  return(
    <div css={tw`bg-orange-100 py-12 w-full flex flex-row`}>
      <p>Im the toolbar</p>
    </div>
  )
}
export default Footer;