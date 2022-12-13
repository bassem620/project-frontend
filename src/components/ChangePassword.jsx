import { toast } from "react-toastify";
import Spinner from "../components/Spinner"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { changePassword, logout } from "../features/users/userSlice";

const ChangePassword = props => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {passModal, setPassModal} = props;

    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword:'',
        confirmPassword:''
    });
    
    const { oldPassword, newPassword, confirmPassword } = formData;
    
    const {user, isLoading, isError, isSuccess, message } = useSelector( state => state.user);

    useEffect( _ => {
        if(isError){
            toast.error(message, {hideProgressBar: true, autoClose: 2000});
        }
        if(isSuccess){
            navigate("../project-frontend/home");
            toast.success(message, {hideProgressBar: true, autoClose: 1500});
            dispatch(logout());
        }
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onSubmit = e => {
        e.preventDefault();
        if( !oldPassword || !newPassword || !confirmPassword) {
            toast.error("Please enter all fields", {hideProgressBar: true, autoClose: 1500});
            return;
        }
        if( newPassword !== confirmPassword){
            toast.error("Passwords doesn't match", {hideProgressBar: true, autoClose: 1500});
            return;
        }
        const userData = {oldPassword, newPassword, confirmPassword};
        dispatch(changePassword(userData));
    }

    const onChange = e => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
        <div className="modal d-block prevent-selection">
            <div className="container-lg d-flex align-items-center justify-content-center w-100 h-100">
                <div className="modalForm bg-light-green rounded-5 p-4">
                    {isLoading ? <Spinner /> : <></>}
                    <form onSubmit={onSubmit}>
                        <h3 className="text-dark-1 text-center p-2">Change Password</h3>
                        <label htmlFor="oldPassword" className="d-block ms-1 fs-5">
                            Old Password
                        </label>
                        <input 
                            type="password" 
                            className="rounded-pill py-2 px-4 bg-light-white border-0"
                            name="oldPassword"
                            id="oldPassword"
                            value={oldPassword}
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                        <label htmlFor="newPassword" className="d-block ms-1 fs-5">
                            New Password
                        </label>
                        <input 
                            type="password" 
                            className="rounded-pill py-2 px-4 bg-light-white border-0"
                            name="newPassword"
                            id="newPassword"
                            value={newPassword}
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                        <label htmlFor="confirmPassword" className="d-block ms-1 fs-5">
                            Confirm Password
                        </label>
                        <input 
                            type="password" 
                            className="rounded-pill py-2 px-4 bg-light-white border-0"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm your password"
                            onChange={onChange}
                        />
                        <div className="buttons d-flex align-items-center justify-content-center mt-4 px-1">
                            <button type="submit" className="btn btn-green d-block" >Change Password</button>
                        </div>
                    </form>
                    <button type="button" className="cancel btn d-block rounded-pill p-2" 
                        onClick={_ =>setPassModal(!passModal)}
                    ><CloseRoundedIcon/></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default ChangePassword;