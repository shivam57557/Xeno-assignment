import { ADD_TO_DO_TASK, DELETE_TASK, DUPLICATE_TASK, EDIT_TASK, COMPLETE_TASK } from "./types";
import { v4 as uuid } from 'uuid';

export const addToDoTask = ( title, desc, date ) => {
      console.log()
      return ({
        type: ADD_TO_DO_TASK,
        payload: {
          id: uuid(),
          title,
          desc,
          date,
          completed: false
        }
      })
  };
  
  
  export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
  });
  
  export const editTask = (id, updates) => {
      console.log(id, updates)
    return ({
        type: EDIT_TASK,
        id,
        updates
  })};

  export const duplicateTask = (id) => ({
    type: DUPLICATE_TASK,
    id,
    newId: uuid()
  });

  export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    id
  });

