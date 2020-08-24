/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import tw from "@tailwindcssinjs/macro";
import Layout from "../components/layout";
import IntroWindow from "../components/windows/introWindow";
import Todos from "../components/windows/todoWindow";
import LessonWindow from "../components/windows/lessonWindow";
import QuizWindow from "../components/windows/quizWindow";
import FeedbackWindow from "../components/windows/feedbackWindow";

const Index = () => (
  <Layout>
    <IntroWindow typeval={"CLOSE_WINDOW"}>
      <div css={tw`flex flex-col p-8`}>
        <h1 css={tw`text-5xl`} className="curvy">
          Hi! Welcome to class.
        </h1>
        <ul css={tw`list-disc text-xl font-medium`} className="digital">
          <li>The red button will close this window</li>
          <li>The yellow button will minimize it</li>
          <li>The green button will maximize it</li>
          <li>
            Folders on the right of the screen can open windows
          </li>
          <li>This window is draggable</li>
        </ul>
        <p css={tw`font-semibold text-2xl`}>Open the Todo List to get started</p>
      </div>
    </IntroWindow>
    <Todos />
    <LessonWindow />
    <QuizWindow />
    <FeedbackWindow />
  </Layout>
);

export default Index;
