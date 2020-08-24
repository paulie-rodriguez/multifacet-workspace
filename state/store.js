import React, { createContext, useReducer } from "react";
import Reducer from "../components/reducer";

const initialState = {
  introWindow: true,
  todoWindow: false,
  lessonWindow: false,
  quizWindow: false,
  feedbackWindow: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
