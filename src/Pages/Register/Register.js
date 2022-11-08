import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import { UserContext } from '../../contexts/AuthContext';

const Register = () => {

    const {createUser, userDisplayName, googleSignIn} = useContext(UserContext);
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const fName = form.fName.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            userProfileUpdate(fName, photourl);
            console.log(user);
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    const userProfileUpdate = (fname, photourl) => {
        const profile = {
            displayName: fname, 
            photoURL: photourl
        }
        userDisplayName(profile)
        .then(() => {})
        .catch(error => toast.error(error.message))
    }

    const googlePopup = () => {
        googleSignIn()
        .then(() => {})
        .catch(error => toast.error(error.message))
    }

    return (
        <div className='my-4'>
        <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center g-0 min-vh-100">

                <div className="col-lg-5 col-md-8 py-8 py-xl-0">

                    <div className="card shadow ">

                        <div className="card-body p-6">
                            <div className="mb-4">
                                <a href="../index.html"><img src={logo} className="mb-4" style={{height: '100px'}} alt="" /></a>
                                <h1 className="mb-1 fw-bold">Login</h1>
                                <span>Don’t have an account? <Link to="/login" className="ms-1">Login</Link></span>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" name="fName" placeholder="Email address here" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Photo URL*</label>
                                    <input type="text" className="form-control" name="photourl" placeholder="Email address here" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" name="email" placeholder="Email address here" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="**************" required />
                                </div>

                                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ">Remember me</label>
                                    </div>
                                </div>
                                <div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary ">Register</button>
                                    </div>
                                </div>
                                <hr className="my-4" />
                            </form>
                            <div className="mt-4 text-center">
                                <button onClick={googlePopup} className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#dd4b39' }} >Continue with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;