import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, duplicateTask, completeTask } from '../actions/toDoActions';
import './CSS/ToDoList.css';


const ToDoListItem = (props) => {
    //console.log(props.task.id);

    const handleDelete = (e) => {
        props.deleteTask(props.task.id);
    }

    const handleDuplicate = (e) => {
        props.duplicateTask(props.task.id)
    }
    const handleComplete = (e) => {
        props.completeTask(props.task.id)
    }
    return (
        <div>
            <div className="d-flex">
                <div className="m-2 flex-grow-1">
                    <i className="bi bi-three-dots-vertical p-1 m-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </i>
                    <i className="bi bi-circle p-1 m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>
                    </i>
                    <h6 className="to-do-heading fw-bold">{props.title}</h6>
                    <h6 className="to-do-desc fw-lighter text-muted"><small>{props.desc}</small>
                        <Link to={`/edit/${props.id}`} className="text-primary fw-normal">Read More</Link>
                    </h6>

                    
                </div>
                <div className="d-flex dropdown-options">
                    <div className="input-group mb-0">
                        <Link to={`/edit/${props.id}`} type="button" className="btn btn-outline-secondary">Edit</Link>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                            <ul className="dropdown-menu">
                                <li><p onClick={(e)=>handleDelete(e)} className="dropdown-item" >Delete</p></li>
                                <li><p onClick={(e)=>handleDuplicate(e)} className="dropdown-item" >Duplicate</p></li>
                                <li><p onClick={(e)=>handleComplete(e)} className="dropdown-item" >Completed</p></li>
                                {/* <li><p className="dropdown-item" >Add Comment</p></li> */}
                            </ul>
                    </div>
                </div>
            </div>
            <i className="bi bi-circle-fill p-2 to-do-created-at">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="#7FFFD4" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                    </svg>
                </i>  
            <p className="d-inline fw-lighter text-muted"><small>To be completed by {props.date} </small></p>  
            <hr style={{margin:"4px"}}/>
        </div>
    )
}


const mapStateToProps = (state, props) => {
    //console.log(props.id, state.task.find((task) => (task.id === props.id)))
    return ({
        task: state.task.find((task) => (task.id === props.id))
        
    })
    
}


export default connect(mapStateToProps, {
    deleteTask,
    duplicateTask,
    completeTask
})(ToDoListItem);  