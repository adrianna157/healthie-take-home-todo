import Header from "./Header.jsx";
import {useContext} from "react";
import ListTaskContext from "../ListTaskContext.js";
import Task from "./Task.jsx";
import {useDroppable} from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";


const TaskStatusSection = ({status}) => {
    const {setNodeRef} = useDroppable({
        id: status,
    })

    const {toDos, inProgress, done} = useContext(ListTaskContext)

    let text = ""

    let bg = "bg-slate-500"
    let tasksToMap = toDos

    if (status === "todo") {
        text = "To Do"
        bg = "bg-red-500"
        tasksToMap = toDos
    }
    if (status === "inProgress") {
        text = "In Progress"
        bg = "bg-yellow-500"
        tasksToMap = inProgress
    }
    if (status === "done") {
        text = "Done"
        bg = "bg-green-500"
        tasksToMap = done
    }


    return (
        <div ref={setNodeRef} className={`w-64`}>
            <Header text={text} bg={bg} count={tasksToMap.length}/>
            <SortableContext items={tasksToMap} strategy={verticalListSortingStrategy}>
                {tasksToMap.length > 0 && tasksToMap.map((task) => <Task key={task.id} task={task}/>)}
            </SortableContext>
        </div>
    );
}

export default TaskStatusSection