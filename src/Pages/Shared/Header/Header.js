import React, { useContext } from 'react';
import '../../../assets/css/style.css';
import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/AuthContext';
import toast from 'react-hot-toast';

const Header = () => {

    const { logOut, user } = useContext(UserContext);

    const userLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => toast.error(error.message))
    }

    return (
        <header className="_header_grover_grocery_wrapper">

            <nav className="navbar navbar-expand-lg navbar-light bg-white _grover_grocery_navbar">
                <div className="container">
                    <div className="_logo_wrap">
                        <Link className="_logo_link" to="/">
                            <img src={logo} alt="Logo" className="_grover_grocery_logo" />
                        </Link>
                    </div>
                    <button className="navbar-toggler _toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 _grover_grocery_list">
                            <li className="nav-item _grover_grocery_list_item">
                                <Link className="nav-link _active _grover_grocery_list_link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item _grover_grocery_list_item">
                                <Link className="nav-link _grover_grocery_list_link" to="/service" 
                                    aria-disabled="true">Service</Link>
                            </li>
                            {
                                user?.email ?
                                    <li className="nav-item _grover_grocery_list_item">
                                        <Link onClick={userLogOut} className="nav-link _grover_grocery_list_link" 
                                            aria-disabled="true">Logout</Link>
                                    </li>
                                    :
                                    <li className="nav-item _grover_grocery_list_item">
                                        <Link className="nav-link _grover_grocery_list_link" to="/login" 
                                            aria-disabled="true">Login</Link>
                                    </li>
                            }
                        </ul>
                        <ul className="_search_btn_list">
                            <li className="_search_btn_list_item">
                                <form className="_nav_search_form">
                                    <span className="_search_ic">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                           >
                                            <path fill="#8B8B8B"
                                                d="M15.212 14.573l-3.808-3.96A6.44 6.44 0 0012.92 6.46 6.467 6.467 0 006.46 0 6.467 6.467 0 000 6.46a6.467 6.467 0 006.46 6.46 6.39 6.39 0 003.701-1.169l3.837 3.99a.838.838 0 001.191.023.844.844 0 00.023-1.19zM6.46 1.685a4.78 4.78 0 014.775 4.775 4.78 4.78 0 01-4.775 4.775A4.78 4.78 0 011.685 6.46 4.78 4.78 0 016.46 1.685z" />
                                        </svg>
                                    </span>
                                    <input className="_nav_search_input" type="text" placeholder="Search" />
                                    <span className="_cart_ic">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                           >
                                            <path fill="#3C3737" 
                                                d="M1.014 10.084a.464.464 0 01.45-.576h21.072c.302 0 .523.283.45.576L20.059 21.79a.927.927 0 01-.9.703H4.84a.927.927 0 01-.9-.703L1.015 10.084zm11.736 3.541a.75.75 0 00-1.5 0v4.75a.75.75 0 001.5 0v-4.75zm4.319-.561a.75.75 0 01.448.961l-1.624 4.464a.75.75 0 11-1.41-.513l1.625-4.464a.75.75 0 01.96-.448zm-9.177.448a.75.75 0 10-1.41.513l1.625 4.464a.75.75 0 101.41-.513l-1.625-4.464z"
                                                 />
                                            <path stroke="#3C3737" 
                                                d="M18.5 10.5l-4.911-6.422a2 2 0 00-3.178 0L5.5 10.5" />
                                        </svg>
                                    </span>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;