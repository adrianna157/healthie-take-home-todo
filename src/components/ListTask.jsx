import {useContext, useEffect, useState} from "react";
import TaskContext from "../TaskContext.js";
import TaskStatusSection from "./TaskStatusSection.jsx";

const ListTask = () => {
    const {tasks} = useContext(TaskContext)
    const [toDos, setToDos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [done, setDone] = useState([])

    useEffect(() => {
        const toDos = tasks.filter((task) => task.status === "todo")
        const inProgress = tasks.filter((task) => task.status === "in-progress")
        const done = tasks.filter((task) => task.status === "done")
        setToDos(toDos)
        setInProgress(inProgress)
        setDone(done)
    }, [tasks])

    const statuses = ["todo", "in-progress", "done"]

    return (
        <div className="flex gap-16">
            {statuses.map((status, index) => {
                return (
                    <TaskStatusSection key={index} status={status} />
                )
            })}
        </div>
    )
}

export default ListTask