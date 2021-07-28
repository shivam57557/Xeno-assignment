import React from 'react';
import CompletedList from './CompletedList';
import './CSS/ToDoSection.css';


const CompletedSection = () => {
    return (
        <div className="container-fluid m-0 p-0 rounded shadow">
            {/* <!-- App title section --> */}
            <div className="row m-1 p-1">
                    <div className="p-0 m-0 h6 display-inline-block card-header-section">
                        Completed
                    </div>
            </div>
            <hr/>

            {/* ToDolist */}
            <CompletedList />
        </div>
    )
}

export default CompletedSection;