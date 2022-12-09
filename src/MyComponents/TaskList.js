import React from 'react'

export default function TaskList(props) {
    
    return (
        <>
           <h1>{props.task.sno}</h1>
           <h1>{props.task.title}</h1>
           <h1>{props.task.desc}</h1>
           <button type="button" className="btn btn-danger" onClick={()=>{props.onDelete(props.task)}}>Delete</button>
        </>
    )
}
