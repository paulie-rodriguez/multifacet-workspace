/** @jsx jsx */
import React, { useState, useContext } from "react";
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import { Context } from "../state/store";


const Directory = () => {
  const [state, dispatch] = useContext(Context);
  const handleOpen = () => {
    dispatch({ type: "OPEN_WINDOW" });
  };
  return (
    <div css={tw`w-1/4 bg-red-100 flex flex-col`}>
      <p>Directory</p>
      <button
        css={tw`bg-blue-400 w-1/2 font-black text-xl font-sans text-white shadow-hard rounded-full border-solid border-2 border-gray-900`}
        onClick={handleOpen}
      >
        Open Window
      </button>
    </div>
  );
};
export default Directory;
