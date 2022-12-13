import { useDispatch, useSelector } from "react-redux";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { logout } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ChangePassword from "../components/ChangePassword";
import { useState } from "react";
import EditAccount from "../components/EditAccount";

const Account = () => {
    const { user } = useSelector( state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [passModal, setPassModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    return (
        <>
        <section className="account">
            <div className="container-lg d-flex justify-content-center align-items-center">
                <div className="user-details bg-light-green rounded-5 px-3 py-5 px-sm-5 text-center text-sm-start">
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
                    <div className="buttons mx-auto mx-sm-0 ms-sm-auto">
                    <button type="button" className="btn btn-green me-2" onClick={ _ => setEditModal(!editModal)}>Edit your account</button>
                    <button type="button" className="btn btn-green me-2" onClick={ _ => setPassModal(!passModal)}>Change password</button>
                    <button type="button" className="btn btn-danger" onClick={ _ => {navigate('/'); toast.info("Signed out", {hideProgressBar: true, autoClose: 1000}); dispatch(logout());}}>Logout</button>
                    </div>
                </div>
            </div>
            { passModal ? <ChangePassword setPassModal={setPassModal} passModal={passModal}/> : <></>}
            { editModal ? <EditAccount setEditModal={setEditModal} editModal={editModal}/> : <></>}
        </section>
        </>
    );
}

export default Account;