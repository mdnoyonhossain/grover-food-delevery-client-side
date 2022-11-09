import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import { UserContext } from '../../contexts/AuthContext';
import useTitle from '../../hooks/useTitle';
import './Login.css'

const Login = () => {
    const {userSignIn, googleSignIn} = useContext(UserContext);

    useTitle('Login')

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            const currentUser = {
                email: user.email
            }

            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('grover-token', data.token)
            })

            navigate(from, { replace: true });
        })
        .catch(error => toast.error(error.message))
    }

    const googlePopup = () => {
        googleSignIn()
        .then(() => {
            navigate(from, { replace: true });
        })
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
                                <span>Don’t have an account? <Link to="/register" className="ms-1">Register</Link></span>
                            </div>

                            <form onSubmit={handleSubmit}>

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
                                        <button type="submit" className="btn btn-primary ">Login</button>
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

export default Login;