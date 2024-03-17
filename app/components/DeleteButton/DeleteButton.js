"use client"
import postService from '@/app/appwrite/config'
import  Style   from './DeleteButton.module.css';
const DeleteButton = () => {
    const handleDelete = async () => {
        const confirmed = window.confirm("Delete Old Documents Permanently?");
        if(confirmed){
        try {
            await postService.deleteOldDocuments();
        } catch (error) {
            console.log("DELETE BUTTON ERROR : ", error.message);
        }
    }
    };
  
    return (
        <button onClick={handleDelete} className={Style.deletebutton}>Delete Old Entries</button>
      );
  };

  export default DeleteButton;
  