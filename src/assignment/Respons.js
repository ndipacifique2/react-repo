import  './Check1.css';
import { useState } from 'react';

const Respons = () =>
{
    let [visible, setViisible] = useState(true)
    return(
        <div>
            <div className='nav'>
                <ul>
                    {visible &&<li onClick={() =>{setViisible(false)} }>menu</li>}
                    {!visible &&<li onClick={() =>{setViisible(true)} }>close</li>}

                    <li>hone</li>
                    <li>hone</li>
                </ul>
            </div>
        </div>
    )
}
export default Respons;