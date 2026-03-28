import React, {useState} from 'react';
import './SideNavigationBar.css';



function SideNavigationBar() {

    const [open, setOpen] = useState(false);

    return (
        <>
        <div className='sidenav' style={{width: open? "250px" : "0"}}>
            <a className='closebtn' onClick={() => setOpen(false)}>&times;</a>
            <a href='#'>Pesquisar</a>
            <a href='#'>Perguntas</a>
            <a href='#'>Conteúdos</a>
            <a href='#'>Mapa Mental</a>
        </div>

        <div id='main' style={{marginLeft: open? "250px" : "0"}} >
            <span style={{fontSize:"30px", cursor:"pointer", position:"absolute", left:"0"}} onClick={() => setOpen(true)}>&#9776;</span>
            <h2>Bem vindo!</h2>
            <p>Para aprender mais, sempre pesquise!</p>
            
        </div>
        </>
    )

}

export default SideNavigationBar;