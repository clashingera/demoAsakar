import React, { useEffect } from 'react';
import postService from "@/app/_appwrite/config"; // Assuming you have configured your Appwrite service
import { useState } from 'react';

export default function DeleteObjectsNotInCurrentMonth() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch objects from Appwrite
        const response = await postService.getDataHistroy(); // Modify this according to your Appwrite setup
        const objects = response.documents;

        // Get the current date
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        const currentYear = currentDate.getFullYear();

        // Filter objects to keep only those in the current month
        const objectsInCurrentMonth = objects.filter(object => {
          const objectDate = new Date(object.date);
          const objectMonth = objectDate.getMonth() + 1;
          const objectYear = objectDate.getFullYear();
          return objectMonth === currentMonth && objectYear === currentYear;
        });

        // Delete objects not in the current month
        const objectsToDelete = objects.filter(object => !objectsInCurrentMonth.includes(object));
        await Promise.all(objectsToDelete.map(object => postService.deleteOldDocuments(object.$id)));

        // Set loading state to false
        setIsLoading(false);
      } catch (error) {
        console.error("Error deleting objects:", error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Objects not in the current month have been deleted.</p>
      )}
    </div>
  );
}
