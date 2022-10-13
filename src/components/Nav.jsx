import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuLink from "./MenuLink";
import { useSelector } from "react-redux";

// Bars Icon
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
// Outlined Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
// Filled Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const Nav = () => {
    const { user } = useSelector( state => state.user);
    const [menuState, setMenuState] = useState("hide");
    const BASE_URL = "/project-frontend";
    const onClick = e => {
        e.preventDefault();
        setMenuState(menuState === "hide" ? "show" : "hide");
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <div className="container-lg my-lg-auto bg-white h-100">
                <NavLink to="/home" className="name text-dark-1 fs-2 fw-bold">App Name</NavLink>
                <button className="toggler d-block ms-auto d-lg-none btn btn-outline-green" type="button" onClick={ _ => setMenuState(menuState === "hide" ? "show" : "hide")}>
                    <DehazeRoundedIcon />
                </button>
                <NavLink className="sell-btn d-none d-lg-block bg-dark-1 ps-5 rounded-pill" to={ BASE_URL + "/sell"} >
                    <div className="add-icon"><AddRoundedIcon /></div>
                    <span>Sell</span>
                </NavLink>
                <div className={"menu " + menuState} id="navbarLinks">
                    <div className="links-container navbar-nav ms-auto bg-dark-1" onClick={onClick}>
                        < MenuLink 
                            url={ BASE_URL + "/home" }
                            title="Home"      
                            unactiveIcon={<HomeOutlinedIcon />}
                            activeIcon={<HomeRoundedIcon />}
                            setMenuState={setMenuState}
                            menuState={menuState}
                            />
                        < MenuLink 
                            url={ BASE_URL + "/sell" }
                            title="Sell"      
                            unactiveIcon={<AddRoundedIcon />}
                            activeIcon={<AddRoundedIcon />}
                            />
                        < MenuLink 
                            url={ BASE_URL + "/my-ads" }
                            title="My ads"     
                            unactiveIcon={<LocalOfferOutlinedIcon />}
                            activeIcon={<LocalOfferIcon />}
                            />
                        < MenuLink 
                            url={ BASE_URL + "/favorites" }
                            title="Favorites"  
                            unactiveIcon={<FavoriteBorderRoundedIcon />}
                            activeIcon={<FavoriteIcon />}
                            />
                        < MenuLink 
                            url={ BASE_URL + (user ? "/account" : "/sign-in") }
                            title={ user ? "Account" : "Sign in"}    
                            unactiveIcon={<PersonOutlineOutlinedIcon />}
                            activeIcon={<PersonIcon />}
                            />
                        < MenuLink 
                            url={ BASE_URL + "/categories" }
                            title="Categories" 
                            unactiveIcon={<CategoryOutlinedIcon />}
                            activeIcon={<CategoryIcon />}
                            />
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Nav;