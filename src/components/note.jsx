import React , {useState} from "react";




function Note(props){

    function deleteHandle(event){
        var index = event.target.name;
        props.onDelete(index);
    }

    return (props.noteArray.map((noteEntry,index)=>{
         return(<div className = "note">
        <h1>{noteEntry.title}</h1>
        <p>{noteEntry.content}</p>
        <button type = "submit" onClick ={deleteHandle} name = {index}>DEL</button>
    </div>);


    }));
    
}

export default Note ; 