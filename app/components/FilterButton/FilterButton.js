
import React, { useState } from 'react'
import postService from '@/app/_appwrite/config'
import { useRouter } from 'next/navigation';

function FilterButton({Style, setTableData}) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isFiltering, setIsFiltering] = useState(false);
    const router = useRouter();

    const handelFilter = async () => {

        setIsFiltering(true);

        if(startDate && endDate){
            const response = await postService.getDataBetDate(startDate,endDate);

            if(response){
                setTableData(response.documents);
            }else{
                console.log("FILTER RES : ", response);
            }

            setIsFiltering(false);

            alert("Successfully FILTERED!");
            router.refresh();
        }
    }

  return (
    <>
    <h1>Dashboard Filter</h1>
    <label htmlFor="startDate">Start Date:</label>
    <input type="date" id="startDate" onChange={(e) => setStartDate(e.target.value)} />
    <label htmlFor="endDate">End Date:</label>
    <input type="date" id="endDate" onChange={(e) => setEndDate(e.target.value)} />
    <button className={Style.button} onClick={handelFilter} >{`${!isFiltering ? "Filter" : "Filtering..."}`}</button>
    </>
  )
}

export default FilterButton