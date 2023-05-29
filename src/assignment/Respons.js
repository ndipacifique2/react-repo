import { render } from '@testing-library/react';
import  './Check1.css';
import { useState } from 'react';
// import { icons } from 'react-icons';
// import {MenuItem} from './MenuItem';

const Respons = () =>
{
//     state ={ Clicked : false};
//     handleClicked = () =>{
//     this.setState ({Clicked : !this.state.Clickd})
//    }
     let [visible, setViisible] = useState(true)
    
    return(
        <div>
            <div className='nav'>
                <div className='nav-logo'>
                    <p>Trippy</p>
                </div>
                <ul className='menu-icons'>
                    <li className= {this.state.Clicked ? "menu" : "close"}>menu</li>
                    
                 {visible &&<li onClick={() =>{setViisible(false)} }>menu</li>}
                    {!visible &&<li onClick={() =>{setViisible(true)} }>close</li>} 
                </ul>
                <ul classNam= "nav-menu active">
                    

                    <li> Hone</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>News</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </div>
    )
                }

export default Respons;