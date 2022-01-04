import React, { useContext,useEffect, useRef,useState} from "react";
import noteContext from "../context/notes/noteContext";
import { AddNote } from "./AddNote";
import Noteitem from "./Noteitem";
import {useNavigate} from 'react-router-dom';


function Notes(props) {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const {notes,getNotes,editNote} = context;
  const [note, setNote] = useState({id:'', etitle:"", edescription:"", etag:""})
  
  const handleClick = (e)=>{
     editNote(note.id, note.etitle, note.edescription, note.etag);
     refClose.current.click();
     props.showAlert("Updated Successfully",'success');
  }
  
  const onChange = (e)=>{
      setNote({...note,[e.target.name]: e.target.value})
  }
  
  useEffect(() => {
    if(localStorage.getItem('token')){
    getNotes();
   }
   else{
    
    navigate('/login');
   }
    //eslint-disable-next-line
   }, [])

   const updatenote = (currentNote)=>{
    ref.current.click();
      setNote({id:currentNote._id,etitle: currentNote.title,edescription: currentNote.description,etag: currentNote.tag});
      // getNotes();
      
    }
   const ref = useRef(null)
   const refClose = useRef(null)
  return (
  <>
    <AddNote showAlert={props.showAlert}/>
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <div className="container my-4">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={note.etitle}
            />
            <div id="emailHelp" className="form-text">
             
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              onChange={onChange}
              value={note.edescription}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              onChange={onChange}
              value={note.etag}
            />
          </div>
        </form>
      </div>
          </div>
          <div className="modal-footer">
            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
          </div>
        </div>
    </div>
</div>
<h2>Your Notes</h2>
    
    <div className="row my-3 mx-3">
   
      {notes.length===0 && "No notes to display"}
      {notes.map((note) => {
        return <Noteitem showAlert={props.showAlert} key={note._id} updatenote={updatenote} note={note}/>;
      })}
    </div>
  </>
  );
}

export default Notes;
