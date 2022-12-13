import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from '../features/users/userSlice';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password:'',
    });

    const { username, password } = formData;

    const {user, isLoading, isError, isSuccess, message} = useSelector( state => state.user );

    useEffect ( _ => {
        if(isError){
            toast.error(message, {hideProgressBar: true, autoClose: 3000});
        }
        if(isSuccess){
            navigate('/');
            toast.success(`Signed in as ${user.username}`, {hideProgressBar: true, autoClose: 1000});
        }
        if(user){
            navigate('/');
        }
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = e => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault();
        if(!username && !password){
            toast.error("Please enter your username and password", {hideProgressBar: true, autoClose: 2000});
            return;
        }
        if(!username){
            toast.error("Please enter your username", {hideProgressBar: true, autoClose: 1500});
            return;
        }
        if(!password){
            toast.error("Please enter your password", {hideProgressBar: true, autoClose: 1500});
            return;
        }
        const userData = {username, password};
        dispatch(login(userData));
    }

    if(isLoading){
        return <Spinner />;
    }

    return (
    <>
    <section className="registeration">
        <div className="container-lg d-flex align-items-center justify-content-center">
            <div className="sign-in bg-light-green rounded-5 px-4 py-5">
                <form onSubmit={onSubmit}>
                    <h3 className="text-dark-1 text-center">Sign in</h3>
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
                    <div className="buttons d-flex align-items-center justify-content-between mt-4 px-1">
                        <Link to="/project-frontend/sign-up" className="link text-dark-1">Create new account?</Link>
                        <button type="submit" className="btn btn-outline-green d-block" >Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
    );
}

export default LogIn;