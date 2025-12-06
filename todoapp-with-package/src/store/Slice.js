import { createSlice, nanoid } from "@reduxjs/toolkit";




const initialState = [
 1,   
"Add"
]

const Slice = createSlice({

    name : "todo",
    initialState,
    reducers: {
        addtodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.push(todo)
        },

        removetodo : (state,action) => {
            return state.filter((item) => item.id !== action.payload)

        },
        buttonupdate : (state,action)=>{
            state[1] = action.payload
        },
        updateid:(state,action) =>{
            state[0] = action.payload
        },
        updatetext:(state,action) =>{
            const id = state[0]
            state.filter((item,index)=>index>1)
            state.forEach((item)=>{
                if(item.id==id){
                    item.text = action.payload
                }
            })
        },
        

        

    }

})



export const {addtodo,removetodo,buttonupdate,updateid,updatetext,todolocalstorage} = Slice.actions
export default Slice.reducer