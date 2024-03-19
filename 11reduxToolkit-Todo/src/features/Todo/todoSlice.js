import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            if (!action.payload.text) {
            alert('Enter valid message') 
            return;}
            const { id, text } = action.payload;
            const todo={
                id:id,
                text,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>(
                todo.id===action.payload.id ? {...todo,text:action.payload.text} : todo
            ))
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer