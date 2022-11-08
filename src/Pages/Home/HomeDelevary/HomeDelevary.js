import React from 'react';
import feat2 from '../../../assets/images/feat2.png'
import mobile from '../../../assets/images/mobile.svg'
import apple from '../../../assets/images/apple.svg'
import playstore from '../../../assets/images/playstore.svg'


const HomeDelevary = () => {
    return (
        <div>
            <section className="_feature_2_grover_grocery_wrapper">
                <div className="_feature_2_grover_grocery_wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-last order-lg-first">
                                <div className="_feature_2_grover_grocery_content">
                                    <div className="_feature_2_grover_grocery_content_txt">
                                        <h5 className="_feature_2_grover_grocery_content_title">HOME DELIVERY</h5>
                                        <h2 className="_feature_2_grover_grocery_content_title2">Sit at Home We Will Take Care Your
                                            Order</h2>
                                        <p className="_feature_2_grover_grocery_content_para">At vero eos et accusamus et iusto odio
                                            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                            quos </p>
                                    </div>
                                    <div className="_feature_2_grover_grocery_content_btn">
                                        <a href="#0" className="_feature_2_content_btn">Explore Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="_feature_2_grover_grocery_content_img">
                                    <img src={feat2} alt="" className="_feature_2_grover_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="_cta_grover_grocery_wrapper">
                <div className="_cta_grover_grocery_wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="_cta_grover_grocery_content_img">
                                    <img src={mobile} alt="" className="_cta_grover_grocery_img" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="_cta_grover_grocery_content">
                                    <div className="_cta_grover_grocery_content_txt">
                                        <h5 className="_cta_grover_grocery_content_title">Download our app</h5>
                                        <h2 className="_cta_grover_grocery_content_title2">Get the Groceries app order more easily.
                                        </h2>
                                        <p className="_cta_grover_grocery_content_para">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-8 col-sm-10 col-12 mx-sm-auto mx-md-0">
                                        <div className="_cta_grover_grocery_content_btn">
                                            <a href="#0" className="_app_btn">
                                                <span className="_app_ic">
                                                    <img src={apple} alt="Apple Logo" />
                                                </span> App Store
                                            </a>
                                            
                                            <a href="#0" className="_playstore_btn">
                                                <span className="_playstore_ic">
                                                    <img src={playstore} alt="Playstore Logo" />
                                                </span> Play Store
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeDelevary;