import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner"
import { register, reset } from "../features/users/userSlice";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phone: null,
        password:'',
        confirmPassword:''
    });

    const { firstName, lastName, username, phone,  password, confirmPassword } = formData;

    const {user, isLoading, isError, isSuccess, message } = useSelector( state => state.user);

    useEffect( _ => {
        if(isError){
            toast.error(message, {hideProgressBar: true, autoClose: 3000});
        }
        if(isSuccess){
            navigate('/');
            toast.success("You are signed up successfully", {hideProgressBar: true, autoClose: 1500});
        }
        if(user){
            navigate('/');
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = e => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault();
        if( !firstName || !lastName || !username || !password || !confirmPassword || !phone) {
            toast.error("Please enter all fields", {hideProgressBar: true, autoClose: 1500});
            return;
        }
        if( password !== confirmPassword){
            toast.error("Passwords doesn't match", {hideProgressBar: true, autoClose: 1500});
            return;
        }
        const userData = {firstName, lastName, username, phone, password};
        dispatch(register(userData));
    }

    if(isLoading){
        return <Spinner />
    }

    return (
    <>
    <section className="registeration">
        <div className="container-lg d-flex align-items-center justify-content-center">
            <div className="sign-up bg-light-green rounded-5 p-4">
                <form onSubmit={onSubmit}>
                    <h3 className="text-dark-1 text-center">Sign up</h3>
                    <label htmlFor="firstName" className="d-block ms-1 fs-5">
                        First Name
                    </label>
                    <input 
                        type="text" 
                        className="rounded-pill py-2 px-4 bg-light-white border-0"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        placeholder="Enter your first name"
                        onChange={onChange}
                    />
                    <label htmlFor="lastName" className="d-block ms-1 fs-5">
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        className="rounded-pill py-2 px-4 bg-light-white border-0"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        placeholder="Enter your last name"
                        onChange={onChange}
                    />
                    <label htmlFor="phone" className="d-block ms-1 fs-5">
                        Phone
                    </label>
                    <input 
                        type="number" 
                        className="rounded-pill py-2 px-4 bg-light-white border-0"
                        name="phone"
                        id="phone"
                        value={phone}
                        placeholder="Enter your phone"
                        onChange={onChange}
                    />
                    <label htmlFor="username" className="d-block ms-1 fs-5">
                        Username
                    </label>
                    <input 
                        type="text" 
                        className="rounded-pill py-2 px-4 bg-light-white border-0"
                        name="username"
                        id="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={onChange}
                    />
                    <label htmlFor="password" className="d-block ms-1 fs-5">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="rounded-pill py-2 px-4 bg-light-white border-0"
                        name="password"
                        id="password"
                        value={password}
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
                    <div className="buttons d-flex align-items-center justify-content-between mt-4 px-1">
                        <Link to="/project-frontend/sign-in" className="link text-dark-1">Already have an account?</Link>
                        <button type="submit" className="btn btn-outline-green d-block" >Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
    );
}

export default Register;