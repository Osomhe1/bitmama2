import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../featuers/slice";

export default configureStore({
    reducer:{
        user:userReducer
    },
})