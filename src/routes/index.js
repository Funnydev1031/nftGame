import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
  
  import Home from '../pages/Home';
  import Login from '../pages/Login';
  import SignUp from '../pages/SignUp';
  
  const routes = () => {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    )
  }
  
  export default routes;