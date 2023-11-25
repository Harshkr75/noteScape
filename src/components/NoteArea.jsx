import React ,{useState} from "react";
import Note from "./note";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateNote(props){

    var [newNotes , setNewNotes] = useState({title: "" , content:"" });
    var [inputArea , setInputArea] = useState(false);
    var [textState , setTextState] = useState(false);

    function newNote(event){
        var Name = event.target.name;
        var Value = event.target.value;

        setNewNotes((prevNote) => {
           return {...prevNote , [Name]: Value}
        });
        
    }

    function newSubmission(event){
        event.preventDefault();
        props.addNote(newNotes);
        setNewNotes({title: "" , content:"" });
    
    
    }
    function formInputArea(){
        setInputArea(true);
        }
    function textClick(){
        setTextState(true);
    }
    
    

    return(
        <div onClick = {formInputArea}>
        <form onSubmit = {newSubmission} className = "create-note">
        <input placeholder ="Title" name = "title" onChange = {newNote} value = {newNotes.title} spellCheck="false" /> 
        {inputArea &&<textarea placeholder = "Add a note" name = "content" onChange = {newNote} value ={newNotes.content} spellCheck = "false" onClick = {textClick} rows = {textState?2:1}/>}
        <Zoom in={textState?true:false}><Fab type="submit" ><AddIcon /></Fab></Zoom>
        </form>
        </div>
    );

}

export default CreateNote ;