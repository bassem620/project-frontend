import { Navigate, Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Nav from './components/Nav.jsx'
import LogIn from './pages/LogIn.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/project-frontend/home" element=""/>
      <Route path="/project-frontend/account" element=""/>
      <Route path="/project-frontend/sign-in" element={<LogIn />}/>
      <Route path="/project-frontend/sign-up" element={<Register />}/>
      <Route path="/project-frontend/favorites" element=""/>
      <Route path="/project-frontend/sell" element=""/>
      <Route path="/project-frontend/categories" element=""/>
      <Route path="/project-frontend/my-ads" element=""/>
      <Route path="/project-frontend/" element={<Navigate to="/project-frontend/home" />} />
      <Route path="/" element={<Navigate to="/project-frontend/home" />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
