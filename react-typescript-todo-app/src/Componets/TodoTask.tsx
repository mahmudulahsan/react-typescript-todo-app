import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask,
    deadline: number;
    completeTask(taskName: string): void
}

const TodoTask = ({task , completeTask}: Props) => {
  return (
    <div className='task'>
        <div className="content">
            <span>{task.taskname}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={() => {
            completeTask(task.taskname)
        }}>X</button>

    </div>
  )
}

export default TodoTask
