import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'

const Footer = () => {
    return (
        <footer className="_footer_grover_grocery_wrapper">
            <div className="_footer_grover_grocery_wrap">
                <div className="container">
                    <div className="_footer_grover_grocery_top">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="_footer_grover_grocery_logo_wrap">
                                    <div className="_footer_grover_grocery_logo">
                                        <img src={logo} alt="logo" className="_footer_logo_img" />
                                    </div>
                                    <div className="_footer_grover_grocery_content_logo">
                                        <p className="_footer_grover_grocery_content_logo_txt">Fast delivery, which is active
                                            all over the world, serves with many transportation vehicles.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="_footer_grover_grocery_content_wrap">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                            <div className="_footer_grover_grocery_content">
                                                <h4 className="_footer_grover_grocery_content_title">Company</h4>
                                                <div className="_footer_grover_grocery_content_list">
                                                    <ul className="_footer_grover_grocery_list">
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">About
                                                                Us</a>
                                                        </li>
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">Blog</a>
                                                        </li>
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">All
                                                                Products</a>
                                                        </li>
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">Locations
                                                                Map</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                            <div className="_footer_grover_grocery_content">
                                                <h4 className="_footer_grover_grocery_content_title">Services</h4>
                                                <div className="_footer_grover_grocery_content_list">
                                                    <ul className="_footer_grover_grocery_list">
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">Order
                                                                tracking</a>
                                                        </li>
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">Wish
                                                                List</a>
                                                        </li>
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">My
                                                                account</a>
                                                        </li>
                                                        <li className="_footer_grover_grocery_list_item">
                                                            <a href="#0" className="_footer_grover_grocery_list_link">Terms &
                                                                Conditions</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                            <div className="_footer_grover_grocery_content">
                                                <h4 className="_footer_grover_grocery_content_title">Get in Touch</h4>
                                                <div className="_footer_grover_grocery_content">
                                                    <p className="_footer_grover_grocery_content_txt">Subscribe to our weekly
                                                        Newsletter and receive updates via email.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_footer_grover_grocery_bottom">
                        <hr className="_footer_divider" />
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="_footer_grover_grocery_copyright">
                                    <p className="_footer_grover_grocery_copyright_txt">All Rights Reserved @ BESNIK 2021</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="_footer_grover_grocery_condition">
                                    <p className="_footer_grover_grocery_condition_txt">
                                        <Link to="/" className="_footer_grover_grocery_condition_link">
                                            Terms & Conditions
                                        </Link>
                                    </p>
                                    <p className="_footer_grover_grocery_condition_txt">
                                        <Link to="/" className="_footer_grover_grocery_condition_link">
                                            Privacy & Policy
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;