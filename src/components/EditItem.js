import React from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions/toDoActions';
import ToDoForm from './ToDoForm';


const EditItem = (props) => {
    //console.log(props);

    return (
        <div className="body-content">
            <ToDoForm 
                task={props.toDoTask} 
                onSubmit= {(toDoTask)=> {
                        props.editTask(props.toDoTask.id, {
                            title: toDoTask.title,
                            desc: toDoTask.desc,
                            date: toDoTask.date
                        })
                        props.history.push('/')
                    }
                }
            />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return ({
        toDoTask: state.task.find( (task) => (`${task.id}` === props.match.params.id) )
    })
}

export default connect(mapStateToProps, {
    editTask
})(EditItem);



        