import { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { toast } from "react-toastify";

const EditAccount = props => {
    const {editModal, setEditModal} = props;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phone: '',
    });

    const { firstName, lastName, username, phone } = formData;

    const onChange = e => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault();
        if( !firstName || !lastName || !username || phone) {
            toast.error("Please enter all fields", {hideProgressBar: true, autoClose: 1500});
            return;
        }
    }

    return (
        <>
        <div className="modal d-block prevent-selection">
            <div className="container-lg d-flex align-items-center justify-content-center w-100 h-100">
                <div className="modalForm bg-light-green rounded-5 p-4">
                    <form submit={onSubmit}>
                        <h3 className="text-dark-1 text-center p-2">Edit Account</h3>
                        <label htmlFor="firstName" className="d-block ms-1 fs-5">
                            Fisrt Name
                        </label>
                        <input 
                            type="text" 
                            className="rounded-pill py-2 px-4 bg-light-white border-0"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            placeholder="Enter your password"
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
                            placeholder="Enter your password"
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
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                        <label htmlFor="phone" className="d-block ms-1 fs-5">
                            Phone
                        </label>
                        <input 
                            type="text" 
                            className="rounded-pill py-2 px-4 bg-light-white border-0"
                            name="phone"
                            id="phone"
                            value={phone}
                            placeholder="Enter your password"
                            onChange={onChange}
                        />

                        <div className="buttons d-flex align-items-center justify-content-center mt-4 px-1">
                            <button type="submit" className="btn btn-green d-block" >Submit</button>
                        </div>
                    </form>
                    <button type="button" className="cancel btn d-block rounded-pill p-2" 
                        onClick={_ =>setEditModal(!editModal)}
                    ><CloseRoundedIcon/></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default EditAccount;