// https://youtu.be/O9tLaztCiQg
// https://youtu.be/kzhS1a2VkIo


import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import About from './About';
import Users from './Users';
import UserId from './UserId';
import Error from './Error';

import './RouteApp.css'



function RouteApp() {
  return (
    <>
     
      <Router>
      <Header />

      {/* <nav>   // для применения закомментить <Header/> и import{BrowserRouter as Router, Routes, Route, Link}...

        <li><Link to="/">Main</Link> </li>
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/users">Users</Link></li> 
      </nav> */}

        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route path="/users/:userName" element={<UserId/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default RouteApp;
