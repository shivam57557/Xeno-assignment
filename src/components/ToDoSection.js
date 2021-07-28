import React from 'react';
import './CSS/ToDoSection.css';
import ToDoList from './ToDoList';


const ToDoSection = () => {
    return (
        <div className="container-fluid m-0 p-0 rounded shadow">
            {/* <!-- App title section --> */}
            <div className="row m-1 p-1">
                    <div className="p-0 m-0 h6 display-inline-block card-header-section">
                        To Do
                    </div>
            </div>
            <hr/>
            <ToDoList />  
        </div>
    )
}

export default ToDoSection