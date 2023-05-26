
import { useState } from 'react';
import Axios from 'axios';

const Fetch = ( ) =>{
    const [data, setData] = useState([]);
    fetch("https://puce-helpful-xerus.cyclic.app/blogs"). then((res) => res.json())
    .then((data) =>{
        console.log(data);
    });
    return(
        <div>
            {data.map((item) => (
<div>
<button onClick={data}> Generate fact</button>
</div>
            ))}
        
      
        </div>
    )
}
export default Fetch;