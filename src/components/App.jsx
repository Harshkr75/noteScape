import React ,{useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note" ;
import CreateNote from "./NoteArea";

function App(){
    var [items , setNewItem] = useState([]);

    function newNote(note){

        setNewItem((prevItem)=>{
            return([
            ...prevItem ,
            note
            ]);
            
        });

    }

    function deleteNote(index){
        setNewItem((prevItem)=>{
            return(prevItem.filter((note,i)=>{
                if(i!=index){
                    return note;
                }
            }));
        });
    }


    return <div><Header />
    <CreateNote addNote = {newNote}/>
    <Note noteArray = {items} onDelete = {deleteNote}/>
    <Footer />
    </div> ;
}

export default App;