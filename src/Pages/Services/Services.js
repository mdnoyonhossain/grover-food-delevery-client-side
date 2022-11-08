import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Services = () => {

    const services = useLoaderData();

    return (
        <PhotoProvider>
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

                                        {
                                            services.map(service => <div key={service._id} className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="_service_grover_grocery_content_inner">
                                                    <div className="_service_grover_grocery_content_bg"></div>
                                                    <div className="_service_grover_grocery_content">
                                                        <div className="_service_grover_grocery_content_ic">
                                                            <PhotoView src={service.serviceUrl}>
                                                                <Link><img src={service.serviceUrl} alt=""
                                                                    className="_service_grover_grocery_content_img" /></Link>
                                                            </PhotoView>
                                                        </div>
                                                        <div className="_service_grover_grocery_content_txt">
                                                            <h6 className='text-danger'>Price: ${service.servicePrice}</h6>
                                                            <Link to={`/services/${service._id}`}><h3 className="_service_grover_grocery_content_title">{service.serviceName}</h3></Link>
                                                            <p className="_service_grover_grocery_content_para">
                                                                {service.serviceDes.slice(0, 100) + '...'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PhotoProvider>
    );
};

export default Services;