import React from 'react';
import './SideNavigationBar.css';



function SideNavigationBar() {

    // const [open, setOpen] = useState(false);

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

        

        </>
    )

}

export default SideNavigationBar;