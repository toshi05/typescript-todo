import React, { Component,FC } from 'react';
import TodoItem, { Todo } from './TodoItem';
type TodoProps = {
    todos:Todo[];
    state:"ALL" | "DONE" | "NEW";
}


const TodoList : FC<TodoProps> = (props) => {
    const todos: Todo[] = props.todos;
        return(
            <>
            {todos.map((todo) => (
                <TodoItem key={todo.id} cont={todo} />
            ))}
            </>
        )
}
export default TodoList;