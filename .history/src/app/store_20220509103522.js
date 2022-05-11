import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "../featuers/slice";

export default configureStore({
    reducer:{
        user:useReducer
    },
})