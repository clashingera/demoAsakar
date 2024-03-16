"use client";
import React from "react";
import styles from "./form.module.css";
import postService from "@/app/appwrite/config";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "@/app/store/tableSlice";


function Form() {

  // const router = useRouter();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("sugar");
  const [amount, setAmount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [cgst, setCgst] = useState(2.5);
  const [sgst, setSgst] = useState(2.5);
  const [igst, setIgst] = useState(2.5);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  // const [total, setTotal] = useState(0);

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

    dispatch(setTableData(response))
    console.log(response);
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
            Add Expense
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
              <th>Todays</th>
              <th>Month</th>
            </tr>
            <tr>
              <td id="todayExpense">100</td>
              <td id="thisMonthExpense">1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
