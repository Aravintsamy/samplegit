import React, { useState } from 'react'
import './todolist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Alert, Snackbar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Editpop } from './Editpop';





export const TodoList = (props) => {


    let getdate = new Date();
    let year = getdate.getFullYear();
    let date = getdate.getDate();
    let month = getdate.getMonth();
    let hour = getdate.getHours();
    let min = getdate.getMinutes();



    const [edit, setEdit] = useState({
        index: null,
        text: '',
        isComplete: false
    });

    const update = (val, select) => {
        props.edit(edit.index, val, select);
        setEdit({
            index: null,
            text: props.val,
            isComplete: props.select
        });

    }
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
    //-----------------------------end of snackbar-------------------------


    const todoList = props.todos.map(
        (element, index) => {
            return <div key={index} className='innerdiv'>

                <li >
                    <div className='startdiv'>

                        <div

                        // onClick={() => props.istaskdone(index)} // Toggle completion status
                        >
                            <input type='checkbox' checked={element.isComplete} onChange={() => props.istaskdone(index)} />
                        </div>

                        <div className={element.isComplete ? 'completetask' : 'notcomplete'}>
                            <span
                                style={{ textDecoration: element.isComplete ? 'line-through' : 'none' }}
                            >
                                {element.text}
                            </span>
                            <div className='time'>{hour}:{min},{date}/{month + 1}/{year}</div>
                        </div>

                    </div>
                    <div className='enddiv p-4'>
                        <div className='p-2' onClick={
                            () => {
                                props.remove(element, index)
                                handleSnackbarClick({ vertical: 'bottom', horizontal: 'right' })();
                            }
                        }><FontAwesomeIcon icon={faTrash} /></div>
                        {/* 
                        <div  onClick={() => setEdit({
                            index: index,
                            text: element.text
                        })}><EditpopUp edit={edit} update={update} /></div> */}

                        <div className='edit p-4' onClick={() => setEdit({
                            index: index,
                            text: element.text
                        })}> <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></div>
                    </div>


                </li>

            </div>
        }
    )
    return (
        <div className='container' >
            <center>
                <div className='todolist'>
                    <div className='todo'>
                        <div className='ul'>{todoList}</div>
                    </div>
                </div>
            </center>
            {
                edit.text ? (
                    // <EditpopUp edit={edit} update={update}/>
                    <Editpop edit={edit} update={update} />
                    //   <Alert edit={edit} update={update}/>
                    // <Alert edit={edit} update={update}></Alert>

                ) : null
            }
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={1000}
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                key={vertical + horizontal}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="error"
                    icon={<CheckCircleOutlineIcon />}
                    sx={{ width: '100%' }}
                >
                    Task Deleted Successfully
                </Alert>
            </Snackbar>
        </div>
    )
}
