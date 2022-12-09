import React from 'react'

import TaskList from './TaskList'
export default function Tasks(props) {
    return (
        <>
            {props.taskSend.map((task) => {
                return <TaskList task={task} key={task.sno} onDelete={props.onDelete}/>
            })}
        </>
    )
}
