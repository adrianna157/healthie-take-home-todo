import CreateList from "./components/CreateList.jsx";
import TaskContext from "./TaskContext.js";
import {useEffect, useState} from "react";
import {Bounce, toast, ToastContainer} from "react-toastify";
import ListTask from "./components/ListTask.jsx";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [tasks, setTasks] = useState([])
    const showToastMessage = (type) => {
        switch (type) {
            case "success":
                toast.success("Task created successfully!",
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
                toast.error('Failed to create task. Please try again.', {
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

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"))
        if (tasks) {
            setTasks(tasks)
        }

    }, [])

    return (
        <TaskContext.Provider value={{tasks, setTasks, showToastMessage}}>
            <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16">
                <ToastContainer theme="colored"/>
                <CreateList/>
                <ListTask/>
            </div>
        </TaskContext.Provider>
    )
}

export default App
