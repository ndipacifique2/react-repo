import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let Toast = () =>{

    const notify = () =>{
        toast("basic notificatiion ");
    };
    return(
<div>
    <h1>welcome bro</h1><br/>
    <button onClick={notify}> Click me</button>
    <ToastContainer></ToastContainer>
</div>
    )
}
export default Toast;