import { createContext,useContext } from 'react';

export const ToDoContext = createContext( {

    todos:[
        {
            id:1,
            todo: 'Todo Message',
            completed: false,
        }
    ],
    addToDo: ( todo )=>{},
    updateToDo: ( id, todo ) => {},
    deleteToDo: (id) => {},
    toggleCopmplete: (id) => {},
} );

export const useTodo = ()=>{

    return useContext( ToDoContext );
}

export const ToDoProvider = ToDoContext.Provider;