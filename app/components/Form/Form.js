"use client";
import React from "react";
import styles from "./form.module.css";
import postService from "@/app/appwrite/config";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Form({setTableData}) {

  const router = useRouter();

  const [description, setDescription] = useState("sugar");
  const [amount, setAmount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [cgst, setCgst] = useState(2.5);
  const [sgst, setSgst] = useState(2.5);
  const [igst, setIgst] = useState(2.5);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  // const [total, setTotal] = useState(0);
  const [isSubmmiting, setIsSubmmiting] = useState(false);

  const [totalToday, setTotlToday] = useState(0);
  const [totalMonth, setTotlMonth] = useState(0);

  useEffect(() => {

    postService.getDataHome().then((res) => {
      const totalAmount = res.documents.reduce((total, expense) => total + parseFloat(expense.total), 0);
      setTotlToday(totalAmount.toFixed(2))
    })

    postService.getDataDashboard().then((res) => {
      const currentDate = new Date();

      // Get the current month and year
      const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
      const currentYear = currentDate.getFullYear();
  
      // Filter expenses for the current month and year
      const currentMonthExpenses = res.documents.filter(expense => {
        const expenseDate = new Date(expense.date);
        const expenseMonth = expenseDate.getMonth() + 1;
        const expenseYear = expenseDate.getFullYear();
        return expenseMonth === currentMonth && expenseYear === currentYear;
      });
  
      // Calculate the total amount spent in the current month
      const totalAmount = currentMonthExpenses.reduce((total, expense) => total + parseFloat(expense.total), 0);
  
      setTotlMonth(totalAmount.toFixed(2)); // Return total amount rounded to 2 decimal places
    })
    
  },[isSubmmiting])

  // const getCurrentMonthTotal = (expenses) => {
  //   // Get the current date
  //   const currentDate = new Date();

  //   // Get the current month and year
  //   const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  //   const currentYear = currentDate.getFullYear();

  //   // Filter expenses for the current month and year
  //   const currentMonthExpenses = expenses.filter(expense => {
  //     const expenseDate = new Date(expense.date);
  //     const expenseMonth = expenseDate.getMonth() + 1;
  //     const expenseYear = expenseDate.getFullYear();
  //     return expenseMonth === currentMonth && expenseYear === currentYear;
  //   });

  //   // Calculate the total amount spent in the current month
  //   const totalAmount = currentMonthExpenses.reduce((total, expense) => total + parseFloat(expense.total), 0);

  //   return totalAmount.toFixed(2); // Return total amount rounded to 2 decimal places
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "amount":
        setAmount(parseFloat(value));
        break;
      case "Quantity":
        setQuantity(parseFloat(value));
        break;
      case "cgst":
        setCgst(parseFloat(value));
        break;
      case "sgst":
        setSgst(parseFloat(value));
        break;
      case "IGST":
        setIgst(parseFloat(value));
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  };

  const totalAmount = () => {
    return (amount + cgst + sgst + igst) * quantity;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmmiting(true);

    const response = await postService.createPost({
      description,
      amount,
      quantity,
      cgst,
      sgst,
      igst,
      date,
      total: totalAmount(),
    });
    if(response){
      setTableData((pData) => ([...pData, response]));
      setIsSubmmiting(false);
    }else{
      console.log(response);
    }
    
    // router.refresh();
    // console.log('Submitted data:', {
    //   description,
    //   amount,
    //   quantity,
    //   cgst,
    //   sgst,
    //   igst,
    //   date,
    //   total : totalAmount()
    // });
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.formContainer}>
        <form
          id="expenseForm"
          className={styles.expenseForm}
          onSubmit={handleSubmit}
        >
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            step="1"
            value={amount}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="Quantity">Quantity:</label>
          <input
            type="number"
            id="Quantity"
            name="Quantity"
            step="1"
            value={quantity} // Corrected typo (quantity -> Quantity)
            onChange={handleChange}
            required
          />
          <br />
          <div className={styles.inlineInputs}>
            <div>
              <label htmlFor="cgst">CGST:</label>
              <input
                type="number"
                id="cgst"
                name="cgst"
                step="0.01"
                min="0"
                max="100"
                value={cgst}
                onChange={handleChange}
                required
              />
              <br />
            </div>
            <div>
              <label htmlFor="sgst">SGST:</label>
              <input
                type="number"
                id="sgst"
                name="sgst"
                step="0.01"
                min="0"
                max="100"
                value={sgst}
                onChange={handleChange}
                required
              />
              <br />
            </div>
            <div>
              <label htmlFor="IGST">IGST:</label>
              <input
                type="number"
                id="IGST"
                name="IGST"
                step="0.01"
                min="0"
                max="100"
                value={igst}
                onChange={handleChange}
                required
              />
              <br />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleChange}
                required
              />
              <br />
            </div>
          </div>
          <button className={styles.submit} type="submit">
            {`${!isSubmmiting ? "Add Expense" : "Proccesing...."}`} 
          </button>
        </form>
      </div>

      <div className={styles.logoContainer}>
        <img src="/img/logo.jpg" alt="Company Logo" className={styles.logo} />
      </div>

      <div className={styles.expenseTracker}>
        <table border="1" className={styles.expTracker}>
          <tbody>
            <tr>
              <th colSpan="2">Expense Tracker</th>
            </tr>
            <tr>
              <th>TODAY</th>
              <th>MONTH</th>
            </tr>
            <tr>
              <td id="todayExpense">{totalToday}</td>
              <td id="thisMonthExpense">{totalMonth}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
