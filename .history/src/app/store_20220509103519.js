import { configureStore } from "@reduxjs/toolkit";
import { use } from "../featuers/slice";

export default configureStore({
    reducer:{
        user:useReducer
    },
})