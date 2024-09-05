import todo_icon from '../assets/todo_icon.png'

const TodoTitle = () => {
    return (
        <div className='flex items-center gap-2 mt-7'>
            <img className='w-10' src={todo_icon}></img>
            <h1 className='text-2xl font-semibold'>Todo List</h1>
        </div>
    )
}

export default TodoTitle