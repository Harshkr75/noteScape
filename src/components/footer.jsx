import React from "react";

function Footer(){
    var date = new Date();
    var Year = date.getFullYear();
    return <footer>
        <p>Copyright &copy; {Year}</p>
        <p>Created by - Harsh Kr</p>
    </footer> ;

}

export default Footer ;