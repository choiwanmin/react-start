import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import todoData from "../../common/todoData";
import { useReducer, useState } from "react";
import { todoReducer } from "./todoReducer.useReducer";

export const TodoMain = () => {

    // const [tasks, setTasks] = useState(todoData)
    const [tasks, dispatch] = useReducer(todoReducer, todoData)

    // const handleAddTask = (text) => {
    //     setTasks([...tasks, {
    //         id: tasks.length++,
    //         text: text,
    //         done: false
    //     }]);
    // };

    const handleAddTask = (text) => {
        dispatch({
            type: 'add',
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            text: text
        })
    }

    // handleChangeTask = (task) => {
    //     setTasks(tasks.map(t => {
    //         if(t.id === task.id) {
    //             return task
    //         } else {
    //             return t
    //         }
    //     }))
    // }

    const handleChangeTask = (task) => {
        dispatch({
            type:'change',
            task: task
        });
    }

    // const handleDeleteTask = (taskId) => {
    //     setTasks(
    //         tasks.filter(t => t.id !== taskId)
    //     )
    // }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type:'delete',
            id: taskId
        })
    }

    return (
        <>
            <h1>todo project</h1>
            <TodoAdd onAddTask={handleAddTask}/>
            {/* +>프롭스는 함수까지 넘겨줄수 있다 */}
            <TodoList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}