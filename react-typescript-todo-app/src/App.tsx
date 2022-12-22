import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Componets/TodoTask";
import {ITask} from './Interfaces'

const App: FC = () => {
  const [ task, setTask ] = useState<string>("");
  const [ deadline, setDeadline ] = useState<number>(0);
  const [ todoList, setTodoList ] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {taskname: task, deadline: deadline}
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
  }

  const completeTask =(taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskname !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <h1>React TypeScript Todo App</h1>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task.."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline.."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
            return (
              <div>
                <TodoTask 
                  key={key}
                  task={task} 
                  deadline={deadline} 
                  completeTask={completeTask}
                />
              </div>
              )
          })}
      </div>
    </div>
  );
};

export default App;
