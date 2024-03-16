import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import tableSlice from "./tableSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        table : tableSlice

    }
})

export default store