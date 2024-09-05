import React from 'react'

const TodoForm = ({ inputRef, addTodo }) => {
    return (
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent outline-none border-none h-14 pl-6 pr-2 flex-1 placeholder:text-slate-600 font-medium'
                type='text' placeholder='Add your task' />
            <button onClick={addTodo} className='bg-orange-600 rounded-full w-32 h-14 border-none text-white text-lg cursor-pointer font-medium'>Add +</button>
        </div>
    )
}

export default TodoForm