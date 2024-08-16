import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

let userSlice = createSlice({
    name:'user',
    initialState:{userName:"Asim",userId:"101"},
    reducers:{
        setuserName:(state,action)=>{
            state.userName = action.payload;
        },
        setUserId:(state,action)=>{
            state.userId = action.payload;
        }
    }
});

export default userSlice.reducer;
export const {setUserId,setuserName} = userSlice.actions;


// cosnt [user,setUser] = useState('')
// setUser('lkdfdf')