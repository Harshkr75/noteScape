import React from "react";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Header(){
    return(<header>
        <h1 className="header"><AutoStoriesIcon fontSize = "medium"/><span>NoteScape</span></h1>
    </header>) ;
}

export default Header;