import React, { useState } from "react";
import styles from "./DeleteButtonTable.module.css";
import postService from "@/app/appwrite/config";
import { usePathname, useRouter } from "next/navigation";
// import { setTableData } from "@/app/store/tableSlice";

function DeleteButtonTable({ id, tag , setTableData }) {
  const [isDeleting, setDeleting] = useState(false);
  const router = useRouter();
  const params = usePathname();

  // console.log(params);

  function updateObjectById(array, idToUpdate, updatedProperties) {
    const indexToUpdate = array.findIndex((obj) => obj.id === idToUpdate);
    if (indexToUpdate !== -1) {
      // Update the object's properties
      array[indexToUpdate] = { ...array[indexToUpdate], ...updatedProperties };
    }
    return array;
  }

  const handleDelete = async () => {
    setDeleting(true);

    const response = await postService.updateStatus(id, true);


    if (response) {

      const tbData = await postService.getDataDashboard();

      if(tbData){
        setTableData(tbData.documents)
      }else{
        console.log("tbDATA  : ", tbData);
      }

      setDeleting(false);

      alert("Successfully deleted!");
      router.refresh();
    }
    console.log("DELETE RES : ", response);
  };

  return (
    <button style={{ backgroundColor: "#e55050" }} onClick={handleDelete}>
      {`${!isDeleting ? "Delete" : "Deleting..."}`}
    </button>
  );
}

export default DeleteButtonTable;
