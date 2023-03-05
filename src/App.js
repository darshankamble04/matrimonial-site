import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/screens/home/Home';
import './components/common/utils.css'
import Login from './components/screens/authentication/Login';
import Register from './components/screens/authentication/Register';
import Dashboard from './components/screens/dashboard/Dashboard';
import ViewProfile from './components/screens/dashboard/components/ViewProfile';
import Search from './components/screens/dashboard/components/Search';
import Notification from './components/screens/dashboard/components/Notification';
import AboutUs from './components/screens/aboutUs/AboutUs';
import ContactUs from './components/screens/contactUs/ContactUs';
import MyAccount from './components/screens/dashboard/components/MyAccount';
import Chat from './components/screens/chat/chat';

function App() {
  return (
   <div className="">
      <Router>
        <Routes>
          <Route Exact path="/" element={<Home />}></Route>
          <Route Exact path="/login" element={<Login />}></Route>
          <Route Exact path="/registration" element={<Register />}></Route>
          <Route Exact path="/dashboard" element={<Dashboard />}></Route>
          <Route Exact path="/search" element={<Search />}></Route>
          <Route Exact path="/chat" element={<Chat />}></Route>
          <Route Exact path="/my-account" element={<MyAccount />}></Route>
          <Route Exact path="/notification" element={<Notification />}></Route>
          <Route Exact path="/about-us" element={<AboutUs />}></Route>
          <Route Exact path="/contact-us" element={<ContactUs />}></Route>
          <Route Exact path="/view-profile/:id" element={<ViewProfile />}></Route>
        </Routes>
      </Router>
   </div>
  );
}

export default App;
