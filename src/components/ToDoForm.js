import React from 'react';
import { Link } from 'react-router-dom';



class ToDoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.task ? props.task.id : '',
            title: props.task ? props.task.title : '',
            desc: props.task ? props.task.desc : '',
            date: props.task ? props.task.date : '',
            error: ''
        }
    }

    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState({title});
    }

    handleDateChange = (e) => {
        const date = e.target.value;
        this.setState({date});
    }

    handleDescChange = (e) => {
        const desc = e.target.value;
        this.setState({desc});
    }

    handleSubmit = (e) => {
        e.preventDefault(e);
        if( !this.state.title ){
            this.setState(() => ({error: 'Please enter an Title'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit( {
                title: this.state.title,
                desc: this.state.desc,
                date: this.state.date
            })
        }
        //history.push('/');
    }

    render(){
        //console.log(this.state)
    return (
        <div className="body-content">
            { this.state.error && <p>{this.state.error}</p> }
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Task To Do</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="taskTitle" 
                    placeholder="Title" 
                    value={this.state.title}
                    onChange={(e)=>this.handleTitleChange(e)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Task Description</label>
                <textarea 
                    className="form-control" 
                    id="taskDesc" 
                    placeholder="Description" 
                    rows="3"
                    value={this.state.desc}
                    onChange={(e)=>this.handleDescChange(e)}
                >

                </textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Completion Date</label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="taskDate" 
                    value={this.state.date}
                    onChange={(e)=>this.handleDateChange(e)}
                />
            </div>
            <button 
                className="btn btn-primary"
                onClick={(e)=>this.handleSubmit(e)}
            >
                Submit
            </button>
            <Link to="/" className="btn btn-outline-success bg-primary text-white m-2">Back</Link>
            </form>
        </div>
    )
    }
}



export default ToDoForm;
