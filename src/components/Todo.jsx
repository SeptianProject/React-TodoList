import { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'
import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';

const Todo = () => {
    const inputRef = useRef();

    const [todoList, setTodoList] = useState(
        localStorage.getItem('todos')
            ? JSON.parse(localStorage.getItem('todos'))
            : []
    );

    function addTodo() {
        const inputText = inputRef.current.value.trim();
        if (inputText === '') return;

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false
        }
        setTodoList(
            (todo) => [...todo, newTodo]
        );
        inputRef.current.value = '';
    }

    const deleteTodo = (id) => {
        setTodoList((todo) => todo.filter((item) => item.id !== id));
    }

    const toggle = (id) => {
        setTodoList((todo) => todo.map((item) => {
            if (item.id === id) {
                return { ...item, isCompleted: !item.isCompleted }
            }
            return item;
        }))

    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList))
    }, [todoList])

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-5 min-h-[550px] rounded-2xl shadow-lg shadow-orange-400'>
            <TodoTitle />
            <TodoForm inputRef={inputRef} addTodo={addTodo} />
            <div>
                {todoList.map((item, index) => {
                    return <TodoItems
                        key={index}
                        id={item.id}
                        text={item.text}
                        isCompleted={item.isCompleted}
                        deleteTodo={deleteTodo}
                        toggle={toggle} />
                })}
            </div>
        </div>
    )
}

export default Todo