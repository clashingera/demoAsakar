import React from 'react'
import styles from "./DeleteButtonTable.module.css"


function updateObjectById(array, idToUpdate, updatedProperties) {
  const indexToUpdate = array.findIndex((obj) => obj.id === idToUpdate);
  if (indexToUpdate !== -1) {
    // Update the object's properties
    array[indexToUpdate] = { ...array[indexToUpdate], ...updatedProperties };
  }
  return array;
}

function DeleteButtonTable({id,tag}) {

    const handleDelete = async (tsetID) => {
        // let newTableData = tableData;
    
        // newTableData = updateObjectById(newTableData, data, { status: true });
    
        // console.log("NEW -->", newTableData)
    
        // setTableData(newTableData);
    
        const response = await postService.updateStatus(tsetID);
    
        if (response) {
          router.refresh();
        }
        console.log("DELETE RES : ", response);
      };
    
  return (
    <button
    className={`${styles.dbstyle}`}
    style={{backgroundColor : "#e55050"}}
    onClick={() => handleDelete(id)}
  >
    {`${tag === "dashboard" ? "Delete" : "Restore"}`}
    
  </button>
  )
}

export default DeleteButtonTable