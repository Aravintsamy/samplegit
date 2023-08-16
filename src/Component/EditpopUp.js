import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './apppop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Alert, Snackbar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const EditpopUp = (props) => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(props.edit.text);
  const [isComplete, setComplete] = useState("incomplete");

  //snakbar
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open: snackbarOpen } = snackbarState;

  const handleSnackbarClick = (newState) => () => {
    setSnackbarState({ ...newState, open: true });
  };

  const handleSnackbarClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };

  const handleChange = (event) => {
    setVal(event.target.value)
  }
  const handleComplete = (e) => {
    const newValue = e.target.value;
    setComplete(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.update(val);
    handleSnackbarClick({ vertical: 'bottom', horizontal: 'right' })();
    setVal('')
  }
  return (
    <div className='popup'>
      <div variant="contained" onClick={handleClickOpen} className='editbutton '>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent className='DialogContent'>
          <p>Tittle </p>
          <form onSubmit={handleSubmit}>
            <TextField className='input'
              value={val}
              id="name"
              type="text"
              fullWidth
              onChange={handleChange}

            />

            <p>Status</p>


            <select name='process' className='userinput'
              style={{ width: '400px' }}
              onChange={handleComplete}
              value={isComplete}
            >
              <option value='Incomplete'>
                Incomplete
              </option>
              <option value='Complete'>
                Complete
              </option>
            </select>
            <div className='pt-4'>
              {/* <input type='submit' value="+"/> */}
              {/* <button type='submit'>Add</button> */}
              <Button className='m-2' variant="contained" color='secondary' type='submit' onClick={handleClose}>Update Task</Button>
              <Button className='m-2' color='inherit' variant="contained" onClick={handleClose}>Cancel</Button>
            </div>
          </form>




        </DialogContent>



      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={1000}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          icon={<CheckCircleOutlineIcon />}
          sx={{ width: '100%' }}
        >
          Task Updated Successfully
        </Alert>
      </Snackbar>

    </div>
  )
}
