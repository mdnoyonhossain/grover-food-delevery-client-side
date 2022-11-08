import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Delevary = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
console.log(services);
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
                                    {
                                        services.map(service => <div key={service._id} className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="_service_grover_grocery_content_inner">
                                            <div className="_service_grover_grocery_content_bg"></div>
                                            <div className="_service_grover_grocery_content">
                                                <div className="_service_grover_grocery_content_ic">
                                                    <Link><img src={service.serviceUrl} alt=""
                                                        className="_service_grover_grocery_content_img" /></Link>
                                                </div>
                                                <div className="_service_grover_grocery_content_txt">
                                                    <h6 className='text-danger'>Price: {service.servicePrice}</h6>
                                                    <h3 className="_service_grover_grocery_content_title">Free shipping</h3>
                                                    <p className="_service_grover_grocery_content_para">
                                                        {service.serviceDes}
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
                    <div className='text-center'>
                        <Link to='/service'><button className='btn btn-danger px-5'>See All</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delevary;