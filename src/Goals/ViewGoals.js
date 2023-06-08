import './Goals.css';
const ViewGoals =() =>{
        const data = [
          { id: 1, name: 'John Doe', age: 25 },
          { id: 2, name: 'Jane Smith', age: 30 },
          { id: 3, name: 'Bob Johnson', age: 35 },
        ];
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
    <div class="search-container">
        <form>
    <input type="text" class="search-input" placeholder="Enter your search query"/>
    <button class="search-button">Search</button></form>
  </div>
  <div className="data-container">
        <h2>Data Display</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Starting Time</th>
              <th>Endinging Time</th>
              <th>Amaaunt Required</th>
              <th>Action</th>
              <th>Notification</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
  </div>
        
    )
}
export default ViewGoals;

