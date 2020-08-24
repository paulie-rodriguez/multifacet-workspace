/** @jsx jsx */
import React, { useState, useContext } from "react";
import { jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import { Context } from "../state/store";
import FolderIcon from "./folderIcon";
const styles = {
  button: tw`
  bg-blue-400 
  w-1/2 
  font-black 
  text-xl 
  font-sans 
  text-white 
  shadow-hard 
  rounded-full 
  border-solid 
  border-2 
  border-gray-900 
  mx-auto
`,
};

const Directory = () => {
  const [state, dispatch] = useContext(Context);

  const handleIntro = () => {
    dispatch({ type: "TOGGLE_INTRO_WINDOW", payload: true });
  };
  const handleTodo = () => {
    dispatch({ type: "TOGGLE_TODO_WINDOW", payload: true });
  };
  const handleLesson = () => {
    dispatch({ type: "TOGGLE_LESSON_WINDOW", payload: true });
  };
  const handleQuiz = () => {
    dispatch({ type: "TOGGLE_QUIZ_WINDOW", payload: true });
  };
  const handleFeedback = () => {
    dispatch({ type: "TOGGLE_FEEDBACK_WINDOW", payload: true });
  };
  return (
    <div css={tw`flex flex-col w-1/4 bg-red-100`}>
      <p css={tw`text-3xl font-bold px-4 pt-12`}>Directory</p>
      <div css={tw`grid grid-cols-2 gap-4`}>
        <FolderIcon
          status={state.introWindow}
          title="Introduction"
          handleClick={handleIntro}
        />
        <FolderIcon
          status={state.todoWindow}
          title="Todo List"
          handleClick={handleTodo}
        />
        <FolderIcon
          status={state.lessonWindow}
          title="Lesson"
          handleClick={handleLesson}
        />
        <FolderIcon
          status={state.quizWindow}
          title="Quiz"
          handleClick={handleQuiz}
        />
        <FolderIcon
          status={state.feedbackWindow}
          title="Feedback"
          handleClick={handleFeedback}
        />
      </div>
    </div>
  );
};
export default Directory;
