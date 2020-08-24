/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import tw from "@tailwindcssinjs/macro";
// import React, { useState, useContext } from "react";
// import { Context } from "../state/store";

const FolderIcon = (props) => {
  if (props.status === false) {
    return (
      <button css={tw`flex flex-col items-center`}
      onClick={props.handleClick}
      >
        <svg
          css={tw`h-16 w-16`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 191 159"
        >
          <defs></defs>
          <title>{props.title}</title>
          <g id="closed">
            <path
              css={tw`stroke-current stroke-8 text-red-900`}
              d="M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"
            ></path>
            <path
              css={tw`fill-current text-orange-100`}
              d="M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"
            ></path>
            <rect
              css={tw`stroke-current stroke-8 text-red-900`}
              x="19"
              y="43"
              width="152"
              height="96"
              rx="12"
              ry="12"
            ></rect>
            <rect
              css={tw`fill-current text-orange-100`}
              x="19"
              y="43"
              width="152"
              height="96"
              rx="12"
              ry="12"
            ></rect>
          </g>
        </svg>
        <p css={tw`text-lg`}>{props.title}</p>
      </button>
    );
  } else {
    return (
      <button css={tw`flex flex-col items-center`}
      onClick={props.handleClick}
      >
        <svg
          css={tw`h-16 w-16`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 191 159"
        >
          <title>{props.title}</title>
          <g id="open">
            <path
              css={tw`stroke-current stroke-8 text-red-900`}
              d="M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"
            ></path>
            <path
              css={tw`fill-current text-orange-100`}
              d="M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"
            ></path>
            <path
              css={tw`stroke-current stroke-8 text-red-900`}
              d="M172,43H44c-6.6,0-10.5,4.5-12,12s-12.5,65.5-13,72,5.4,12,12,12H159c6.6,0,10.5-3.5,12-12s11.5-64.5,13-72S178.6,43,172,43Z"
            ></path>
            <path
              css={tw`fill-current text-orange-200`}
              d="M172,43H44c-6.6,0-10.5,4.5-12,12s-12.5,65.5-13,72,5.4,12,12,12H159c6.6,0,10.5-3.5,12-12s11.5-64.5,13-72S178.6,43,172,43Z"
            ></path>
          </g>
        </svg>
        <p css={tw`text-lg`}>{props.title}</p>
      </button>
    );
  }
};
export default FolderIcon;
