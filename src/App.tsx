import React, { Component,useState,FC } from 'react';
import Header from './components/Header';
import CreateContent from './components/CreateContent';
import TodoList from './components/TodoList';
import { Todo } from './components/TodoItem'

const todos: Todo[] = [
  {
    id : 1,
    content: "React",
    done:false
  },
  {
    id : 2,
    content: "yori muzui",
    done:false
  },
  {
    id : 3,
    content: "Typescript",
    done:true
  },
]
const App : FC = () => {
    const [contents,setContent] = useState(todos);
    const addTodo = (text : string) => {
      console.log(text)
      const nowContents : Todo = {
        id:contents.length + 1,
        content:text,
        done:false
      }
      const hoge : Todo[] = [...contents,nowContents];
      setContent(hoge);
    }
    const title: string = "APP TITLE";
    return(
      <>
      <Header title={title} />
      <CreateContent func={addTodo}/>
      <TodoList todos={contents} state="ALL" />
      </>
    );
}

export default App;