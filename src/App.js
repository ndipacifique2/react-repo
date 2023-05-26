
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import './css/stayle.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Home from './components/Home';
// import About from './components/About';
// import CreateBlog from './components/CreateBlog';
// import { userState } from 'react';
// import './css/touchin.css'; 
// import Form from './assignment/Form';
// import NumberCounter from './assignment/NumberCounter';
import Mapping from './assignment/Mapping';
import { useState } from 'react';
import Fetch from './assignment/Fetch';
import Respons from './assignment/Respons';

function App() {
  //const [Students, setStudents] =useState([{name:"kanyana", age:20,} ,{name:"pacifique", age:40}]);
  //     const alerts = () => {
  //       alert("button clicked");
  //     }
  return (
    <div className="App">
       {/* <NumberCounter/> */}
       {/* <Mapping Students={Students}/> */}
       {/* <Fetch/> */}
       <Respons/>
       </div>
       
//       <Router>
//       <Header /> 
//       <Switch>  
//        <Route exact path="/" component={Home}/>
//       <Route  path="/about" component={About}/> 
//       <Route  path="/form" component={Form}/>  
     
       
//       <Route   path="/" render={() =><CreateBlog name={names}  alerts={alerts}/>}/>  
//        </Switch>
//  <Footer /> 

//  </Router>  
//  <Sidebar/> 
   

//        </div>
 )}
export default App;
