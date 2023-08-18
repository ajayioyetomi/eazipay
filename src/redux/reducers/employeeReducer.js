import { createSlice } from "@reduxjs/toolkit";

const employeeReducer = createSlice({
    name:"employees",
    initialState:{value:[]},
    reducers:{
        set_employees:(state,action)=>{
            return{value:action.payload}
        }
    }
})

export const {set_employees} = employeeReducer.actions;

export default employeeReducer.reducer;