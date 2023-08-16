import React, { useState } from 'react'
import './editipop.css'
import { Alert, Snackbar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Editpop = (props) => {
  const [open, setOpen] = useState(false);

  const [val, setVal] = useState(props.edit.text);
  const [select, setSelect] = useState(props.edit.isComplete || false);

  //snakbar
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    severity: 'success'
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
  }
  //---------------------snackbar end------------------------
  const handleComplete = (e) => {
    const newValue=e.target.value==='true'
    setSelect(newValue);
  };
  const handleChange = (event) => {
    handleSnackbarClick({ vertical: 'bottom', horizontal: 'right' })();
    setVal(event.target.value)
  }
  const handleSubmit = (event) => {

    event.preventDefault();
    props.update(val,select);
    // props.update(select)
    // props.update({
    //   text: val,
    //   isComplete: select
    // })
  }

  return (

    <div className='eouter' onClick={handleClickOpen}>

      <div className='epopup' open={open} onClose={handleClose}>
        <h4>Edit Todo</h4>
        <p>Tittle </p>
        <form onSubmit={handleSubmit}>
          <input className='input'
            id="name"
            type="text"
            fullWidth
            onChange={handleChange}
            value={val}
          />

          <p>Status</p>


          <select name='process'
            style={{ width: '400px' }}
            onChange={handleComplete}
            value={select}
          >
            <option value={false}>
              Incomplete
            </option>
            <option value={true}>
              Complete
            </option>
          </select>
          <div className='pt-4'>
            {/* <input type='submit' value="+"/> */}
            {/* <button type='submit'>Add</button> */}
            <button className='btn btn-primary m-2' variant="contained" color='secondary' type='submit' onClick={handleClose}>Update Task</button>
            <button className='btn btn-secondary m-2' color='inherit' variant="contained" onClick={handleClose}>Cancel</button>
          </div>
        </form>

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



    </div>

  )
}
