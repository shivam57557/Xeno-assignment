import { ADD_TO_DO_TASK, COMPLETE_TASK, DELETE_TASK, DUPLICATE_TASK, EDIT_TASK } from "../actions/types"

const INITIAL_STATE = [
    {
        id: 1,
        title: "Task 1",
        desc: " 1st Task to be completed",
        date: "2021-07-21",
        completed: false
    },
    {
        id: 2,
        title: "Task 2 ",
        desc: " 2nd Task to be completed",
        date: "2021-07-14",
        completed: false
    },
    {
        id: 3,
        title: "Task 3",
        desc: " 3rd Task to be completed",
        date: "2021-07-23",
        completed: false
    },
    {
        id: 4,
        title: "Task 4",
        desc: " 4th Task to be completed",
        date: "2021-07-23",
        completed: true
    },
    {
        id: 5,
        title: "Task 5",
        desc: " 5th Task to be completed",
        date: "2021-07-23",
        completed: true
    }
]


const taskReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case ADD_TO_DO_TASK :
            return [...state, action.payload]
        case EDIT_TASK :
            return state.map((task) => {
                if (task.id === action.id) {
                  return {
                    ...task,
                    ...action.updates
                  };
                } else {
                  return task;
                };
              });
        case DELETE_TASK :
            return state.filter(({ id }) => id !== action.id);
        case DUPLICATE_TASK :
            const task = state.find(({ id }) => id === action.id);
            const newTask = {
                ...task,
                id: action.newId
            }
            return [ ...state, newTask]
        case COMPLETE_TASK :
            return state.map((task) => {
                if (task.id === action.id) {
                  return {
                    ...task,
                    completed: true
                  };
                } else {
                  return task;
                };
              });
        default:
            return state;
    }
}

export default taskReducer