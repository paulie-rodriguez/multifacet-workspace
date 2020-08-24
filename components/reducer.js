const Reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_INTRO_WINDOW":
      return {
        ...state,
        introWindow: action.payload,
      };
    case "TOGGLE_TODO_WINDOW":
      return {
        ...state,
        todoWindow: action.payload,
      };
    case "TOGGLE_LESSON_WINDOW":
      return {
        ...state,
        lessonWindow: action.payload,
      };
    case "TOGGLE_QUIZ_WINDOW":
      return {
        ...state,
        quizWindow: action.payload,
      };
    case "TOGGLE_FEEDBACK_WINDOW":
      return {
        ...state,
        feedbackWindow: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
