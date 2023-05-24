import {useState} from 'react';
let Mapping = ({Students}) =>{

    
    // const Students = () =>{
    //     console.log(Students);
    // }
    return(
        <div>
            {/* <p>{Students [1].name}</p>
            <button onClick={Student}>send</button> */}
            
            {Students.map ((item) =>(
            <div>
                <h1> name:{item.name}</h1>
                <h2> age:{item.age}</h2>
               </div>
            ))}
            
        </div>
    )
}
export default Mapping;