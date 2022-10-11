import { NavLink } from "react-router-dom";

const MenuLink = (props) => {
    const {url, activeIcon, unactiveIcon, title} = props
    return (
        <>
        <NavLink className={"navbar-link nav-link " + (title==="Sell" ? "d-block d-lg-none" : "")} to={url}>
            {
            ({isActive}) => isActive ?
            (<>
                <div className="link-container">
                    <div className="link-icon d-inline-block">
                        {activeIcon}
                    </div>
                    <span className="link-text d-inline-block">{title}</span>
                </div>
            </>)
            : (
            <>
                <div className="link-container">
                    <div className="link-icon d-inline-block">
                        {unactiveIcon}
                    </div>
                    <span className="link-text d-inline-block">{title}</span>
                </div>
            </>)
            }       
        </NavLink>
        </>
    );
}

export default MenuLink;