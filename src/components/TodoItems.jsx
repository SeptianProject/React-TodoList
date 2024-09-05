import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ id, text, isCompleted, deleteTodo, toggle }) => {
    return (
        <div className='flex items-center my-3 mx-3'>
            <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
                <img src={isCompleted ? tick : not_tick} className='w-7' />
                <p className={` text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isCompleted ? 'line-through' : ''}`} >
                    {text}
                </p>
                <div></div>
            </div>
            <img onClick={() => deleteTodo(id)} src={delete_icon} className='w-4 cursor-pointer hover:text-orange-500' />
        </div>
    )
}

export default TodoItems