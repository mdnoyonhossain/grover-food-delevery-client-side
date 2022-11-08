import React from 'react';
import banner from '../../../assets/images/header-img.png'
import strawberry from '../../../assets/images/strawberry.svg'

const Banner = () => {
    return (
        <div className="_header_grover_grocery_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="_header_grover_grocery_content">
                                <div className="_header_grover_grocery_content_top_txt">
                                    <h3 className="_header_grover_grocery_content_top_title">More than Faster</h3>
                                    <span className="_header_top_txt_img">
                                        <img src={strawberry} alt="" className="_strawberry_img" />
                                    </span>
                                </div>
                                <div className="_header_grover_grocery_content_txt">
                                    <h1 className="_header_grover_grocery_content_title">Groceries delivered in as little as
                                        <span className="_header_red_clr"> 2 hours</span></h1>
                                    <p className="_header_grover_grocery_content_para">Grocen atssures fresh grocery every
                                        morning to your family without getting out in this pandemic.</p>
                                </div>
                                <div className="_header_grover_grocery_btn_wrap">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-5 col-md-3 col-sm-4 col-4 ms-auto ms-md-0">
                                            <div className="_header_grover_grocery_btn">
                                                <a href="#0" className="_header_now_btn">Order Now</a>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-7 col-md-4 col-sm-5 col-5 me-auto me-md-0">
                                            <div className="_header_grover_grocery_btn">
                                                <button className="_header_process_btn">
                                                    <span className="_play_ic">
                                                        <img src="assets/images/button-play.svg" alt="" className="_play_img" />
                                                    </span>
                                                    
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="_header_grover_grocery_content_img">
                                <img src={banner} alt="" className="_header_grover_grocery_img"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;