import DashBoard from './component/DashBoard'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Privateroute from './component/Privateroute';
import Navbar from './component/Navbar'
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/user" element={<Privateroute />}>
            <Route exact path={`dashboard`} element={<DashBoard />} />
          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
