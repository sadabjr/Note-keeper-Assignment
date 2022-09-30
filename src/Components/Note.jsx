import React from 'react';
import './note.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';

const Note = (props) => {

    const deleteNote = () => {
      props.deleteItem(props.id);
    }

  return (
    <div className="grid-container">
      <div className='note'>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <Button className='del-btn' onClick={deleteNote}>
        <DeleteOutlineIcon className='deleteIcon'/>
        </Button>
    </div>
    </div>
  )
}

export default Note