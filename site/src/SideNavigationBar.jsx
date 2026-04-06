import React, {useState} from 'react';
import './SideNavigationBar.css';


function SideNavigationBar() {

    const [open, setOpen] = useState(false);

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div className='sidenav' /*style={{width: open? "250px" : "0"}}*/ >
            {/*<a className='closebtn' onClick={() => setOpen(false)}>&times;</a>*/}
            <a href='#'><i className ="fa fa-fw fa-home" title='Home'></i></a>
            <a href='#'><i className ="fa fa-fw fa-search" title='Pesquisar'></i></a>
            <a href='#'><i className ="fa fa-fw fa-question" title='Perguntas'></i></a>
            <a href='#'><i className ="fa fa-fw fa-book" title='Conteúdo'></i></a>
            <a href='#'><i className ="fa fa-fw fa-map" title='Mapa Mental'></i></a>
        </div>

        <div id='main' /*style={{marginLeft: open? "250px" : "0"}}*/ >
            {/*<span style={{fontSize:"30px", cursor:"pointer", position:"absolute", left:"0"}} onClick={() => setOpen(true)}>&#9776;</span>*/}
            <h2>Bem vindo!</h2>
            <p>Para aprender mais, sempre pesquise!</p>
        </div>

        <div className='row'>
            <div id='banner'>

            </div>
        </div>

        <div className='row'>
            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

        </div>

        <div className='row'>
            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

            <div className='column'>
            </div>

        </div>


        </>
    )

}

export default SideNavigationBar;