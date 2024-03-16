"use client"
import postService from '@/app/appwrite/config'

const DeleteButton = () => {
    const handleDelete = async () => {
        try {
            await postService.deleteOldDocuments();
        } catch (error) {
            console.log("DELETE BUTTON ERROR : ", error.message);
        }
    };
  
    return (
      <button onClick={handleDelete}>Delete Old Documents</button>
    );
  };

  export default DeleteButton;
  