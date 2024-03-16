import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tableData : []
}

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTableData : (state , action) =>{
            return [...state , action.payload];
        },
         addRow:(state,action)=>{
             const newRow=action.payload;
             state.tableData.push(newRow);
             return {...state };
         }, 
         deleteRow:(state,action)=> {
             let indexToDelete=action.payload;
             state.tableData=state.tableData.filter((row,index)=>{return index!==indexToDelete});
             return {...state};
         }
    }
})

export const { setTableData, addRow, deleteRow} = tableSlice.actions

export default tableSlice.reducer