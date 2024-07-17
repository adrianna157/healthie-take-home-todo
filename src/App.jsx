import CreateList from "./components/CreateList.jsx";
import TaskContext from "./TaskContext.js";
import {useEffect, useState} from "react";
import {Bounce, toast, ToastContainer} from "react-toastify";
import ListTask from "./components/ListTask.jsx";
import 'react-toastify/dist/ReactToastify.css';
import {closestCorners, DndContext, DragOverlay} from '@dnd-kit/core';
import {arrayMove} from "@dnd-kit/sortable";
import Task from "./components/Task.jsx";
import Confetti from 'react-confetti';


function App() {

    const [tasks, setTasks] = useState([])
    const [activeId, setActiveId] = useState(null)
    const [showConfetti, setShowConfetti] = useState(false)

    const showToastMessage = (type, message) => {
        switch (type) {
            case "success":
                toast.success(message ?? "Task created successfully!",
                    {
                        position: 'top-center',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                break
            case "fail":
                toast.error(message ?? 'Failed to create task. Please try again.', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: 0,
                    theme: "colored",
                    transition: Bounce,
                })
                break
            default:
                break
        }

    }

    const validStatuses = ['todo', 'inProgress', 'done']; // Define your valid statuses

    const getTaskPos = (id, tasks) => tasks.findIndex(task => task.id === id);

    const handleDragEnd = (event) => {
        const {active, over} = event;

        if (!over) {
            return;
        }

        setTasks(tasks => {
            let newStatus = over.id;

            if (!validStatuses.includes(newStatus)) {
                const overTaskPos = getTaskPos(over.id, tasks);
                if (overTaskPos === -1) {
                    showToastMessage('fail', 'Task not found')
                    return tasks;
                }
                newStatus = tasks[overTaskPos].status;
            }

            const originalPos = getTaskPos(active.id, tasks);
            const activeTask = tasks[originalPos];

            if (!activeTask) {
                showToastMessage('fail', 'Task not found')
                return tasks;
            }

            const updatedTask = {...activeTask, status: newStatus};

            let newTasks = tasks.map(task =>
                task.id === active.id ? updatedTask : task
            );

            if (activeTask.status !== newStatus && newStatus === 'done') {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 3000);
            }

            if (activeTask.status === newStatus || tasks.some(task => task.id === over.id)) {
                const newPos = getTaskPos(over.id, newTasks);
                if (newPos !== -1 && newPos !== originalPos) {
                    newTasks = arrayMove(newTasks, originalPos, newPos);
                }
            }

            localStorage.setItem("tasks", JSON.stringify(newTasks));

            return newTasks;
        });

        setActiveId(null);
    };

    const handleDragStart = (event) => {
        setActiveId(event.active.id)
    }

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"))
        if (tasks) {
            setTasks(tasks)
        }

    }, [])

    return (
        <TaskContext.Provider value={{tasks, setTasks, showToastMessage, activeId}}>
            {showConfetti && <Confetti/>}
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16">
                    <ToastContainer theme="colored"/>
                    <CreateList/>
                    <ListTask/>
                    <DragOverlay>
                        {activeId ? (
                            <Task task={activeId}/>
                        ) : null}
                    </DragOverlay>
                </div>
            </DndContext>
        </TaskContext.Provider>
    )
}

export default App
