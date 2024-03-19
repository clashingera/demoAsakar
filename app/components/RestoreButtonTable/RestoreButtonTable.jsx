import React, { useState } from "react";
// import styles from "./DeleteButtonTable.module.css";
import postService from "@/app/_appwrite/config";
import { usePathname, useRouter } from "next/navigation";
// import { setTableData } from "@/app/store/tableSlice";

function RestoreButtonTable({ id, tag , setTableData }) {
  const [isDeleting, setDeleting] = useState(false);
  const router = useRouter();
  const params = usePathname();

  const handleDelete = async () => {
    setDeleting(true);

    const response = await postService.updateStatus(id , false);


    if (response) {

      const tbData = await postService.getDataHistroy();

      if(tbData){
        setTableData(tbData.documents)
      }else{
        console.log("tbDATA  : ", tbData);
      }

      setDeleting(false);

      alert("Successfully Restored!");
      router.refresh();
    }
    console.log("RESTORE RES : ", response);
  };

  return (
    <button style={{ backgroundColor: "#e55050" }} onClick={handleDelete}>
      {`${!isDeleting ? "Restore" : "Restore..."}`}
    </button>
  );
}

export default RestoreButtonTable;
