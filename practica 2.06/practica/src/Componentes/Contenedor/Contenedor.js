import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
//Aquí es donde mostramos todos los componentes.
function Contenedor(){
    //código javascript
   
    return(
        <React.Fragment>
         <div id="Contenedor">
        <Header></Header>
        <Menu></Menu>
        <Main>
        </Main>
        <Footer>
        </Footer>
         </div>
        </React.Fragment>
    );
}
export default Contenedor;