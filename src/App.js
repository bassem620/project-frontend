import { Navigate, Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { useSelector } from 'react-redux';
import Nav from './components/Nav.jsx'
import LogIn from './pages/LogIn.jsx';
import Register from './pages/Register.jsx';
import Account from './pages/Account.jsx';
import Home from './pages/Home.jsx';
import Sell from './pages/Sell.jsx';
import Favorites from './pages/Favorites.jsx';
import Categories from './pages/Categories.jsx';
import MyAds from './pages/MyAds.jsx';

function App() {
  const { user } = useSelector( state => state.user);
  const BASE_URL = "/project-frontend";
  return (
    <>
    <Nav />
    <Routes>
      {/* Main routes */}
      <Route path={ BASE_URL + "/home"} element={<Home />}/>
      <Route path={ BASE_URL + "/account"} element={<Account />} />
      <Route path={ BASE_URL + "/sign-in"} element={<LogIn />}/>
      <Route path={ BASE_URL + "/sign-up"} element={<Register />}/>
      <Route path={ BASE_URL + "/categories"} element={<Categories />}/>
      {/* Routes based on user is logged in or not */}
      <Route path={ BASE_URL + "/my-ads"} element={ user ? <MyAds /> : <Navigate to="/project-frontend/sign-in" />}/>
      <Route path={ BASE_URL + "/sell"} element={ user ? <Sell /> : <Navigate to="/project-frontend/sign-in" /> }/>
      <Route path={ BASE_URL + "/favorites"} element={ user ? <Favorites /> : <Navigate to="/project-frontend/sign-in" />}/>
      {/* Other Routes */}
      <Route path={ BASE_URL + "/*"} element={<Navigate to="/project-frontend/home" />} />
      <Route path="/" element={<Navigate to="/project-frontend/home" />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
