import React, { useState } from "react";
// import styles from "./DeleteButtonTable.module.css";
import postService from "@/app/_appwrite/config";
import { usePathname, useRouter } from "next/navigation";
import FormDialog from "../Cart/Cart";
// import { setTableData } from "@/app/store/tableSlice";

function EditButton({ styles, setTableData, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const params = usePathname();

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
    <button className={styles.edit} onClick={handleEdit}>
      {`${!isEditing ? "Edit" : "Editing..."}`}
    </button>
    {isEditing && <FormDialog id={id}/>}
    </>
    
  );
}

export default EditButton;
