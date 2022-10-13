import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password:'',
    });

    const { username, password } = formData;

    const onChange = e => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault();
        if(!username && !password){
            toast.error("Please enter you username and password", {hideProgressBar: true, autoClose: 3000});
            return;
        }
        if(!username){
            toast.error("Please enter you username", {hideProgressBar: true, autoClose: 3000});
            return;
        }
        if(!password){
            toast.error("Please enter you password", {hideProgressBar: true, autoClose: 3000});
            return;
        }
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