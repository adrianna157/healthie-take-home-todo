import TaskContext from "../TaskContext.js";
import {useContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const CreateList = () => {
    const {setTasks, showToastMessage} = useContext(TaskContext)
    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo"
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (task.name === "") return showToastMessage("fail")

        if (task.name.length < 5) return showToastMessage("fail", "Task name should be at least 5 characters")

        if (task.name.length > 100) return showToastMessage("fail", "Task name should not exceed 50 characters")

        setTasks((prev) => {
            const list = [...prev, task]

            localStorage.setItem("tasks", JSON.stringify(list))


            return list
        })

        // clear the input field
        setTask({
            id: "",
            name: "",
            status: "todo"
        })

        showToastMessage("success")


    }
    return (
        <form onSubmit={handleSubmit} className="mt-10">
            <input
                type="text"
                className="border-2 border-slate-400 bg-slate-100 rounded mr-4 h-12 w-64 px-1"
                onChange={(e) => setTask({...task, id: uuidv4(), name: e.target.value})}
                placeholder="Enter Task Name"
                value={task.name}
            />
            <button className="bg-blue-500 rounded-md px-4 h-12 text-white">Create Task</button>
        </form>
    )
}

export default CreateList