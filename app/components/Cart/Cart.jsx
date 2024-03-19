import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import postService from "@/app/_appwrite/config";
import {useRouter } from "next/navigation";

export default function FormDialog({styles, data, setTableData}) {

  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const calculateTotal = (amount, igst, cgst, sgst , quantity) => {
    const total = parseFloat(amount) + parseFloat(igst) + parseFloat(cgst) + parseFloat(sgst);
    return isNaN(total) ? 0 : total * parseFloat(quantity);
    };

  return (
    <React.Fragment>
      <button className={styles.edit} variant="outlined" onClick={handleClickOpen}>
        Edit
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();

            setIsEditing(true);

            const newTotal = calculateTotal(
              event.target.amount.value,
              event.target.igst.value,
              event.target.cgst.value,
              event.target.sgst.value,
              event.target.quantity.value
            );
            
            const uData = {
              date :  event.target.date.value,
              description :  event.target.description.value,
              amount :  event.target.amount.value,
              quantity :  event.target.quantity.value,
              CGST :  event.target.cgst.value,
              SGST :  event.target.sgst.value,
              IGST :  event.target.igst.value,
              total : String(newTotal),
            }

            console.log(uData.total);

            try {
              postService.updatePost(data.$id,uData).then((response) => {
                console.log(response);
                try {
                  postService.getDataDashboard().then((response) => {
                    console.log(response.documents)
                    setTableData(response.documents)
                  })
                } catch (error) {
                  console.log("UPDATE POST ERROR : ",error.message)
                }finally{
                  router.refresh()
                  setIsEditing(false);
                  handleClose();
                }
              })
            } catch (error) {
              console.log("UPDATE POST ERROR : ",error.message)
            } finally {
                console.log(uData);
            }
             
          },
        }}
      >
        <DialogTitle>EDIT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            color='success'
            defaultValue={data.description}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="date"
            name="date"
            label=""
            type="date"
            fullWidth
            variant="outlined"
            color='success'
            defaultValue={data.date}
          />
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="amount"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="outlined"
            color='success'
            defaultValue={data.amount}
          /> 

          <TextField
            autoFocus
            required
            margin="dense"
            id="quantity"
            name="quantity"
            label="Quantity"
            type="number"
            fullWidth
            variant="outlined"
            color='success'
            defaultValue={data.quantity}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="cgst"
            name="cgst"
            label="CGST"
            type="number"
            fullWidth
            variant="outlined"
            color='success'
            defaultValue={data.CGST}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="sgst"
            name="sgst"
            label="SGST"
            type="number"
            fullWidth
            variant="outlined"
            color='success'
            defaultValue={data.SGST}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="igst"
            name="igst"
            label="IGST"
            type="number"
            fullWidth
            variant="outlined"
            color='success'
            defaultValue={data.IGST}
          />
        </DialogContent>
        <DialogActions>
          <Button color='success' onClick={handleClose}>Cancel</Button>
          <Button color='success' type="submit"> {`${!isEditing ? "Edit" : "Editing..."}`}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}