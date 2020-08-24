/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import Draggable from "react-draggable";
import React, { useState, useContext } from "react";
import { Collapse } from "react-collapse";
import { Context } from "../../state/store";

const styles = {
  window: tw`
xl:max-w-3xl
lg:max-w-2xl
md:max-w-xl
bg-orange-100
border-solid
border-2
border-gray-900
rounded-xl
shadow-hard
flex
flex-col
self-start
`,
};
const IntroWindow = ({ children, ...props }) => {
  const [state, dispatch] = useContext(Context);
  const [isDragging, setIsDragging] = useState({ status: false, zIndex: 1000 });

  const [isOpened, setIsOpened] = useState(true);

  const handleClose = () => {
    dispatch({ type: "TOGGLE_INTRO_WINDOW", payload: false });
    console.log(state);
  };
  const handleMinimize = () => {
    setIsOpened(false);
  };
  const handleMaximize = () => {
    setIsOpened(true);
  };
  return (
    <>
      {state.introWindow ? (
        <Draggable
          bounds="parent"
          handle=".draggable-block-container"
          onStart={() =>
            setIsDragging({
              ...isDragging,
              status: true,
              zIndex: isDragging.zIndex + 1,
            })
          }
          onEnd={() => setIsDragging({ ...isDragging, status: false })}
        >
          <section
            {...props}
            css={styles.window}
            className={`draggable-block-container`}
            style={{
              zIndex: isDragging.zIndex,
            }}
          >
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
            <Collapse isOpened={isOpened}>{children}</Collapse>
          </section>
        </Draggable>
      ) : null}
    </>
  );
};
export default IntroWindow;
