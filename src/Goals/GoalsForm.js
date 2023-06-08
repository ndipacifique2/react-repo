import './Goals.css';
const GoalsForm =() =>{
    return(
        <div>
            <div className='nav'>
            <ul>
    <li className='nav active'>
        <a href="">Create Goals</a></li>
        <li>
        <a href="">View Goals</a>
    </li>
</ul> 
            </div>
            <div className='side'>
             <div className="sidebar">
      <ul className="sidebar-menu">
      <li className="menu-item ">Dashboard</li>
        <li className="menu-item ">Home</li>
        <li className="menu-item">My account</li>
        <li className="menu-item active">Goals</li>
        <li className="menu-item">Records</li>
        <li className="menu-item">Settings</li>
      </ul>
    </div></div>
    <div className='work'>
            <form>
                <p>GOALS FORNM</p>
                <input type='text' id='Title'  placeholder='Title' required/>
                <input type='date' id='StartingTime'  placeholder='Starting Time' required/>
                <input type='date' id='EndingTime'  placeholder='Ending Time ' required/>
                <input type='number' id='AmaountRequired' placeholder='Amount Required' required/>
                <textarea  id='GoalsDetails'  placeholder='Goals Details' required/>
                <button>Save</button>
            </form></div>
        </div>
    )
}
export default GoalsForm;

