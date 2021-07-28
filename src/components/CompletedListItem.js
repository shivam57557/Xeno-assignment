import React from 'react';
import './CSS/ToDoList.css';


const CompletedListItem = (props) => {
    return (
        <div className="d-flex">
            <div className="m-2 flex-grow-1">
                <i className="bi bi-three-dots-vertical p-1 m-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </i>
                {/* <i className="bi bi-circle p-1 m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>
                </i> */}
                <i className="bi bi-check-circle-fill p-1 m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8A2BE2" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </i>
                <h6 className="to-do-heading fw-bold text-decoration-line-through">{props.toDoTitle}</h6>
                <i className="bi bi-circle-fill p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="#7FFFD4" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                    </svg>
                </i>  
                <p className="d-inline fw-lighter text-muted"><small>Task finished on {props.date}</small></p>           
            </div>
            <hr/>
        </div>
    )
}

export default CompletedListItem;