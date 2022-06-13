import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import taskReducer from "../features/task/TaskSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
    },
});
