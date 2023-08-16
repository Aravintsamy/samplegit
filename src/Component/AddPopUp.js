// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './apppop.css'
import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const AddPopUp=(props) =>{
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('')
  const [isComplete, setComplete] = useState(false);

   //snakbar --------------------------------------------------------
   const [snackbarState, setSnackbarState] = useState({
   open: false,
    vertical: 'top',
    horizontal: 'center',
    severity:'success'
  });
  const { vertical, horizontal,severity,message, open:snackbarOpen } = snackbarState;

  const handleSnackbarClick = (newState) => () => {
    setSnackbarState({ ...newState, open: true });
  };

  const handleSnackbarClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

//pop up----------------------------------
  const handleClickOpen = () => {
    setOpen(true);
    
  };


  const handleClose = () => {
   
    setOpen(false);
  };

 //------------handle the input----------------------
  const handleChange = (e) => {
    
    setInput(e.target.value);
    
  }
  const handleComplete = (e) => {
  const newValue = e.target.value === 'true';
  setComplete(newValue);
};


  const handleSubmit = (e) => {
    if(input!==""){
      handleSnackbarClick({ vertical: 'bottom', horizontal: 'right',severity:'success',message:'Task Added Sucessfully'})();
    }
    else{
      handleSnackbarClick({ vertical: 'bottom', horizontal: 'right', severity:'error',message:'Insert A Task'})();
    }

    e.preventDefault();
    props.submit({
      text: input,
      isComplete: isComplete
    })
    
    setInput('');
    setComplete(false)
    
  }


  return (
    <div className='popup'>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Task
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent className='DialogContent'>
          <p>Tittle </p>
          <form onSubmit={handleSubmit}>
            <TextField className='input'
              id="name"
              type="text"
              fullWidth
              onChange={handleChange}
              value={input}
            />

            <p>Status</p>

            {/* 
            <select
              name='process'
              className='userinput'
              style={{ width: '400px' }}
              onChange={handleComplete}
              defaultValue={isComplete.toString()}
            >
              <option value='false'>Incomplete</option>
              <option value='true'>Complete</option>
            </select> */}
            <select
              name='process'
              className='userinput'
              style={{ width: '400px' }}
              onChange={handleComplete}
              value={isComplete.toString()}
            >
              <option value={false}>Incomplete</option>
              <option value={true}>Complete</option>
            </select>
            <div className='pt-4'>
              {/* <input type='submit' value="+"/> */}
              {/* <button type='submit'>Add</button> */}
              <Button className='m-2' variant="contained" color='secondary' type='submit' onClick={handleClose}>Add Task</Button>
              <Button className='m-2' color='inherit' variant="contained" onClick={handleClose}>Cancel</Button>
            </div>
          </form>




        </DialogContent>



      </Dialog>

         <Snackbar
        anchorOrigin={{ vertical, horizontal,severity,message }}
        autoHideDuration={1000}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={severity} 
          icon={<CheckCircleOutlineIcon />} 
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
      
    </div>
    
  );
}
export default AddPopUp;