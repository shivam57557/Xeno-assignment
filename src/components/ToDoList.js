import React from 'react';
import { connect } from 'react-redux';
import './CSS/ToDoList.css';
import ToDoListItem from './ToDoListItem';


const ToDoList = (props) => {
    //console.log(props.toDoTask);
    return (
        <div>
            {props.toDoTask.filter(({ completed }) => completed !== true).map((item)=>{
                return (
                    <ToDoListItem 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        desc={item.desc}
                        date={item.date}
                    />
                )})
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state.task)
    return ({
        toDoTask: state.task
    })
}

export default connect(mapStateToProps, {})(ToDoList);