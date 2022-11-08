import React from 'react';
import feat from '../../../assets/images/feat.png'


const Favorites = () => {
    return (
        <section className="_feature_grover_grocery_wrapper">
            <div className="_feature_grover_grocery_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div className="_feature_grover_grocery_content_img">
                                <img src={feat} alt="" className="_feature_grover_img" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className="_feature_grover_grocery_content">
                                <div className="_feature_grover_grocery_content_txt">
                                    <h5 className="_feature_grover_grocery_content_title">WHY CHOOSE US</h5>
                                    <h2 className="_feature_grover_grocery_content_title2">Find Favorites and Discover New Ones
                                    </h2>
                                    <p className="_feature_grover_grocery_content_para">At vero eos et accusamus et iusto odio
                                        dignissimos ducimus blanditiis praesen voluptatum deleniti.</p>
                                </div>
                                <div className="_feature_grover_grocery_content_btn">
                                    <a href="#0" className="_feature_content_btn">Explore Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Favorites;