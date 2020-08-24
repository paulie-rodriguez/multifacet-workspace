/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import Draggable from "react-draggable";
import React, { useState, useContext } from "react";
import { Collapse } from "react-collapse";
import { Context } from "../../state/store";

const styles = {
  window: tw`
max-w-2xl
w-full
bg-teal-100
border-solid
border-2
border-gray-900
rounded-xl
shadow-hard
flex
flex-col
self-start
`,
  buttonBlue: tw`
bg-blue-500 
hover:bg-blue-700 
text-white 
font-bold 
py-2 
px-4 
rounded
mx-4
`,
};
const QuizWindow = ({ children, ...props }) => {
  const [state, dispatch] = useContext(Context);
  const [isDragging, setIsDragging] = useState({ status: false, zIndex: 1000 });

  const [isOpened, setIsOpened] = useState(true);
  const [answer, setAnswer] = useState("neutral");

  const handleAnswer = (input) => {
    setAnswer(input);
    console.log(answer);
  };
  const handleClose = () => {
    dispatch({ type: "TOGGLE_QUIZ_WINDOW", payload: false });
    console.log(state);
  };
  const handleMinimize = () => {
    setIsOpened(false);
  };
  const handleMaximize = () => {
    setIsOpened(true);
  };
  let Checker;
  if (answer === "correct") {
    Checker = (
      <div css={tw`font-sans text-green-500`}>That&apos;s Correct!</div>
    );
  } else if (answer === "incorrect") {
    Checker = (
      <div css={tw`font-sans text-red-500`}>That&apos;s Incorrect.</div>
    );
  } else {
    Checker = <div></div>;
  }
  return (
    <>
      {state.quizWindow ? (
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
              <span css={tw`flex flex-row justify-between`}>
                <div css={tw``}>
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
                </div>
                <p
                  css={tw`text-xl mx-auto`}
                  className={` ${isOpened ? `hidden` : `block`}`}
                >
                  Quiz
                </p>
              </span>
            </div>
            <Collapse isOpened={isOpened}>
              <div css={tw`flex flex-col p-8`}>
                <h1 css={tw`text-5xl`} className="curvy">
                  Quiz time!
                </h1>
                <div
                  css={tw`text-xl font-medium flex flex-col`}
                  className="digital"
                >
                  <p>What video game is in the video?</p>
                  <div css={tw`flex flex-row justify-around py-12`}>
                    <button
                      css={styles.buttonBlue}
                      onClick={() => handleAnswer("correct")}
                    >
                      <p>Animal Crossing</p>
                    </button>
                    <button
                      css={styles.buttonBlue}
                      onClick={() => handleAnswer("incorrect")}
                    >
                      <p>Crash Bandicoot</p>
                    </button>
                  </div>
                  {Checker}
                </div>
              </div>
            </Collapse>
          </section>
        </Draggable>
      ) : null}
    </>
  );
};
export default QuizWindow;
