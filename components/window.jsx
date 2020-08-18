// /** @jsx jsx */
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import Draggable from "react-draggable";
import React, { useState, useContext } from "react";
import { Collapse } from "react-collapse";
import { Context } from "../state/store";

const styles = {
  window: tw`
max-w-3xl
mx-auto
bg-orange-100
border-solid
border-2
border-gray-900
rounded-xl
shadow-hard
flex
flex-col
`,
};
const Window = ({ children, ...props }) => {
  const [state, dispatch] = useContext(Context);

  const [isOpened, setIsOpened] = useState(true);

  const handleClose = () => {
    dispatch({ type: "CLOSE_WINDOW" });
  };
  const handleMinimize = () => {
    setIsOpened(false);
  };
  const handleMaximize = () => {
    setIsOpened(true);
  };
  return (
    <>
      {state ? (
        <Draggable>
          <section {...props} css={styles.window}>
            <div
              css={tw`w-full py-4`}
              className={`${
                isOpened ? ` border-b border-gray-900 border-b-2 ` : ` `
              }`}
            >
              <span css={tw`flex flex-row`}>
                <button
                  onClick={handleClose}
                  css={tw`bg-red-300 p-2 rounded-full border-2 border-gray-900 mx-2`}
                />
                <button
                  onClick={handleMinimize}
                  css={tw`bg-yellow-300 p-2 rounded-full border-2 border-gray-900 mx-2`}
                />
                <button
                  onClick={handleMaximize}
                  css={tw`bg-green-300 p-2 rounded-full border-2 border-gray-900 mx-2`}
                />
              </span>
            </div>
            <Collapse isOpened={isOpened}>
              <div css={tw`flex flex-col p-8`}>
                <h1 css={tw`text-5xl`} className="curvy">Hi! Thanks for opening this</h1>
                <ul css={tw`list-disc text-xl font-medium`} className="digital">
                  <li>The red button will close this window</li>
                  <li>The yellow button will minimize it</li>
                  <li>The green button will maximize it</li>
                  <li>That blue button on the right of the screen can re open this after closing</li>
                  <li>This window is draggable</li>

                </ul>
              </div>
              <div>{children}</div>
            </Collapse>
          </section>
        </Draggable>
      ) : null}
    </>
  );
};
export default Window;
