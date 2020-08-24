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
  bg-blue-100
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
  buttonYellow: tw`
  bg-yellow-300 
  hover:bg-yellow-400 
  text-black 
  font-bold 
  py-2 
  px-4 
  rounded
  mx-4
  `,
  buttonRed: tw`
  bg-red-500 
  text-white 
  rounded 
  px-4 
  py-2 
  font-bold
  `,
  task: tw`
  
  `,
};

const Todos = ({ children, ...props }) => {
  const [state, dispatch] = useContext(Context);

  const [localTodos, setTodos] = useState([
    {
      text: "Watch Lesson",
      isCompleted: false,
    },
    {
      text: "Take Quiz",
      isCompleted: false,
    },
    {
      text: "Provide Feedback",
      isCompleted: false,
    },
  ]);
  const [isOpened, setIsOpened] = useState(true);

  const [isDragging, setIsDragging] = useState({ status: false, zIndex: 1000 });

  const handleClose = () => {
    dispatch({ type: "TOGGLE_TODO_WINDOW", payload: false });
  };
  const handleMinimize = () => {
    setIsOpened(false);
  };
  const handleMaximize = () => {
    setIsOpened(true);
  };
  const toggleTodo = (index) => {
    const newTodos = [...localTodos];
    if (newTodos[index].isCompleted === true) {
      newTodos[index].isCompleted = false;
    } else {
      newTodos[index].isCompleted = true;
    }
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...localTodos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      {state.todoWindow ? (
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
                  Todo List
                </p>
              </span>
            </div>
            <Collapse isOpened={isOpened}>
              <div css={tw`flex flex-col p-8`}>
                <h1 css={tw`text-5xl`} className="curvy">
                  Task List:
                </h1>
                <ul css={tw`text-xl font-medium flex flex-col`}>
                  {localTodos.map((todo, index) => (
                    <div
                      css={tw`flex flex-row justify-between my-2 px-2 py-2 items-baseline bg-white rounded`}
                    >
                      <li
                        key={index}
                        className={`${
                          todo.isCompleted ? ` line-through` : ` `
                        }`}
                      >
                        {todo.text}
                      </li>
                      <button
                        css={
                          !todo.isCompleted
                            ? styles.buttonBlue
                            : styles.buttonYellow
                        }
                        onClick={() => toggleTodo(index)}
                      >
                        {!todo.isCompleted ? (
                          <p>Complete</p>
                        ) : (
                          <p>Incomplete</p>
                        )}
                      </button>
                      <button
                        css={styles.buttonRed}
                        onClick={() => removeTodo(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            </Collapse>
          </section>
        </Draggable>
      ) : null}
    </>
  );
};
export default Todos;
