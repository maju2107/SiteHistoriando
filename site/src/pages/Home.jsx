import React from 'react';
import SideNavigationBar from '../SideNavigationBar';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
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
                <Link to="/chegadaPortuguesesBrasil" id='title'>A chegada dos portugueses ao Brasil</Link>;
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

export default Home;