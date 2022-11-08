import React from 'react';
import { Link } from 'react-router-dom';
import delevery1 from '../../../assets/images/service-ic1.svg'
import delevery2 from '../../../assets/images/service-ic2.svg'
import delevery3 from '../../../assets/images/service-ic3.svg'

const Delevary = () => {
    return (
        <section className="_service_grover_grocery_wrapper">
            <div className="_service_grover_grocery_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="_service_grover_grocery_heading">
                                <h5 className="_service_grover_grocery_heading_title">What we Serve</h5>
                                <h2 className="_service_grover_grocery_heading_title2">fruit and vegetable delivered to your
                                    home</h2>
                            </div>
                        </div>
                    </div>
                    <div className="_service_grover_grocery_content_wrap">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 mx-auto">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="_service_grover_grocery_content_inner">
                                            <div className="_service_grover_grocery_content_bg"></div>
                                            <div className="_service_grover_grocery_content">
                                                <div className="_service_grover_grocery_content_ic">
                                                    <Link><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfQuLBzNbAw4yd99gVQ1_Rc3kLUC8vM7ZNg&usqp=CAU' alt=""
                                                        className="_service_grover_grocery_content_img" /></Link>
                                                </div>
                                                <div className="_service_grover_grocery_content_txt">
                                                    <h6 className='text-danger'>Price: $15</h6>
                                                    <h3 className="_service_grover_grocery_content_title">Free shipping</h3>
                                                    <p className="_service_grover_grocery_content_para">Enjoy Order in a hand
                                                        Order in a handy way using the freshness of the groceries.using Order in a handy way using the freshness of the groceries.using Order in a handy way using the freshness of the groceries.using
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="_service_grover_grocery_content_inner">
                                            <div className="_service_grover_grocery_content_bg"></div>
                                            <div className="_service_grover_grocery_content">
                                                <div className="_service_grover_grocery_content_ic">
                                                    <Link><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfQuLBzNbAw4yd99gVQ1_Rc3kLUC8vM7ZNg&usqp=CAU' alt=""
                                                        className="_service_grover_grocery_content_img" /></Link>
                                                </div>
                                                <div className="_service_grover_grocery_content_txt">
                                                    <h3 className="_service_grover_grocery_content_title">15 days returns</h3>
                                                    <p className="_service_grover_grocery_content_para">Order in a handy way
                                                        Order in a handy way using the freshness of the groceries.using Order in a handy way using the freshness of the groceries.using Order in a handy way using the freshness of the groceries.using
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="_service_grover_grocery_content_inner">
                                            <div className="_service_grover_grocery_content_bg"></div>
                                            <div className="_service_grover_grocery_content">
                                                <div className="_service_grover_grocery_content_ic">
                                                    <Link><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfQuLBzNbAw4yd99gVQ1_Rc3kLUC8vM7ZNg&usqp=CAU' alt=""
                                                        className="_service_grover_grocery_content_img" /></Link>
                                                </div>
                                                <div className="_service_grover_grocery_content_txt">
                                                    <h3 className="_service_grover_grocery_content_title">Secure checkout</h3>
                                                    <p className="_service_grover_grocery_content_para">
                                                        Order in a handy way using the freshness of the groceries.using Order in a handy way using the freshness of the groceries.using Order in a handy way using the freshness of the groceries.using
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link to='/service'><button className='btn btn-danger px-5'>See All</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delevary;