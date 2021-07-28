import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addToDoTask } from '../actions/toDoActions';



const AddItem = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    let history = useHistory();

    const handleTitleChange = (e) => {
        e.preventDefault(e);
        setTitle(e.target.value);
    }

    const handleDateChange = (e) => {
        e.preventDefault(e);
        setDate(e.target.value);
    }

    const handleDescChange = (e) => {
        e.preventDefault(e);
        setDesc(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(e);
        //setTitle(e.target.value);
        console.log(title, desc, date)
        props.addToDoTask( title, desc, date )
        history.push('/');
    }

    return (
        <div className="body-content">
            <div className="mb-3">
                <label className="form-label">Task To Do</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="taskTitle" 
                    placeholder="Title" 
                    value={title}
                    onChange={(e)=>handleTitleChange(e)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Task Description</label>
                <textarea 
                    className="form-control" 
                    id="taskDesc" 
                    placeholder="Description" 
                    rows="3"
                    onChange={(e)=>handleDescChange(e)}
                >

                </textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Completion Date</label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="taskDate" 
                    onChange={(e)=>handleDateChange(e)}
                />
            </div>
            <button 
                className="btn btn-primary"
                onClick={(e)=>handleSubmit(e)}
            >
                Submit
            </button>
            <Link to="/" className="btn btn-outline-success bg-primary text-white m-2">Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({

    })
}

export default connect(mapStateToProps, {
    addToDoTask
})(AddItem);
