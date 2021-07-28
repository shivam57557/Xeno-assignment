import React from 'react';
import { connect } from 'react-redux';
import CompletedListItem from './CompletedListItem';
import './CSS/ToDoList.css';


const CompletedList = (props) => {
    return (
        <div className="">
            {props.toDoTask.filter(({ completed }) => completed === true).map((item)=>{
                return (
                    <CompletedListItem key={item.id} date={item.date} toDoTitle = {item.title} />
                )
                })
            }
            {/* <CompletedListItem date={"28th July"} toDoTitle = {"Review Journey Builder UI"} />
            
            <CompletedListItem date={"29th July"} toDoTitle = {"Review Journey Builder UI 1"} /> */}
        </div>
    )
}



const mapStateToProps = (state) => {
    //console.log(state.task)
    return ({
        toDoTask: state.task
    })
}

export default connect(mapStateToProps, {})(CompletedList);