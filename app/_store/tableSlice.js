import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tableData: []
}

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTableData: (state, action) => {
            const newRow = action.payload;
            state.tableData.push(newRow);
        },
        addRow: (state, action) => {
            const newRow = action.payload;
            state.tableData.push(newRow);
        },
        deleteRow: (state, action) => {
            const indexToDelete = action.payload;
            state.tableData = state.tableData.filter((row, index) => index !== indexToDelete);
        }
    }
})

export const { setTableData, addRow, deleteRow} = tableSlice.actions

export default tableSlice.reducer