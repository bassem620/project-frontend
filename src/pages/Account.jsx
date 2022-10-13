import { useDispatch, useSelector } from "react-redux";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { logout } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Account = () => {
    const { user } = useSelector( state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
        <section className="account">
            <div className="container-lg">
                <div className="user-details bg-light-green rounded-5 px-3 py-5 px-md-5">
                    <div className="icon"><AccountCircleOutlinedIcon /></div>
                    <div>
                        <label>First Name:</label>
                        <span>{user.firstName}</span>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <span>{user.lastName}</span>
                    </div>
                    <div>
                        <label>Username:</label>
                        <span>{user.username}</span>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <span>{user.phone}</span>
                    </div>
                    <div className="buttons ms-md-auto">
                    <button type="button" className="btn btn-green me-2">Edit your account</button>
                    <button type="button" className="btn btn-green me-2">Change password</button>
                    <button type="button" className="btn btn-danger" onClick={ _ => {navigate('/'); toast.success("Signed out"); dispatch(logout());}}>Logout</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Account;