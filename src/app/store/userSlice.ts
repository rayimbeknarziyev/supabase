import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

const initialState : {
    users: IUser[]
    error: null | string
    loading: boolean
} = {
    users:[],
    error: null,
    loading: false
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
})

export default userSlice.reducer