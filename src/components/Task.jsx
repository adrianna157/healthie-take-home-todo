import {useContext} from "react";
import TaskContext from "../TaskContext.js";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

const Task = ({task}) => {
    const {tasks, setTasks, showToastMessage} = useContext(TaskContext)
    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: task.id})

    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to remove this task?")) {
            const newTasks = tasks.filter((task) => task.id !== id)
            setTasks(newTasks)
            localStorage.setItem("tasks", JSON.stringify(newTasks))

            showToastMessage("success", "Task removed successfully!")
        }

    }

    const draggableTransition = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div
            ref={setNodeRef}
            style={draggableTransition}
            className={`relative p-4 mt-8 shadow-md rounded-md ${isDragging ? "opacity-25" : "opacity-100"}`}
        >
            <div className="drag-handle cursor-grab" {...listeners} {...attributes}>
                <p>{task.name}</p>
            </div>
            <button
                className="text-slate-400 absolute bottom-1 right-1"
                onClick={(e) => {
                    handleRemove(task.id);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="size-6 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                </svg>
            </button>
        </div>
    )
}

export default Task