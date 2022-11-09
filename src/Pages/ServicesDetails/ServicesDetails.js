import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';



const ServicesDetails = () => {
    const service = useLoaderData()
    const { serviceUrl, serviceName, serviceDes, servicePrice } = service;
    const { user } = useContext(UserContext);

    const [reviews, setReviews] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const phone = form.phone.value;
        const email = user ? user.email : 'unRegisterd';
        const message = form.message.value;

        const order = {
            serviceName,
            servicePrice,
            name,
            phone,
            rating,
            email,
            message
        }

        fetch('https://grover-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added Successfully')
                    form.reset();
                }
            })
    }

    useEffect(() => {
        fetch('https://grover-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);

    return (
        <div className='container'>
            <div className='container border rounded shadow bg-danger p-3'>
                <div className="card mb-3">
                    <img src={serviceUrl} className="card-img-top" alt="..." />
                    <hr />
                    <div className="card-body">
                        <h5 className='text-danger'>Price: ${servicePrice}</h5>
                        <h5 className="card-title">{serviceName}</h5>
                        <p className="card-text">{serviceDes}</p>

                    </div>
                </div>
            </div>


            {/* <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 rounded shadow p-5 border">

                {
                    reviews.map(review => <div key={review._id} className="col">
                        <div className="card border p-3">
                           
                            <img src={user?.photoURL} className="card-img-top" style={{width: '70px', borderRadius: '50%'}} alt="." />
                            
                            <div className="card-body">
                                <h5 className="card-title">{review.name}</h5>
                                <p className='m-0'><small>{review.email}</small></p>
                                <p><small className='text-success'>Star: {review.rating}</small></p>
                                <p className="card-text">{review.message.slice(0, 145)}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div> */}


            {
                user?.uid ?
                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 rounded shadow p-5 border">

                            {
                                reviews.map(review => <div key={review._id} className="col">
                                    <div className="card border p-3">

                                        <img src={user?.photoURL} className="card-img-top" style={{ width: '70px', borderRadius: '50%' }} alt="." />

                                        <div className="card-body">
                                            <h5 className="card-title">{review.name}</h5>
                                            <p className='m-0'><small>{review.email}</small></p>
                                            <p><small className='text-success'>Star: {review.rating}</small></p>
                                            <p className="card-text">{review.message.slice(0, 145)}</p>
                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>

                        <section className="mb-4 container p-5 rounded" style={{ backgroundColor: '#FEF5F5' }}>
                            <h2 className="h1-responsive font-weight-bold text-center my-4">Customer Review</h2>
                            <div className="row">
                                <div className="col-md-8 m-auto mb-md-0 mb-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <input type="text" name="name" placeholder='Name' className="form-control" required />
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">

                                                    <select className="form-select" name='rating' aria-label="Default select example">
                                                        <option selected>Select Reting</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="subject" name="phone" placeholder='Phone Number' className="form-control" required />
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form">
                                                    <textarea type="text" id="message" placeholder='Feedback' name="feedback" rows="2" className="form-control md-textarea" required></textarea>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center text-md-left">
                                            <button type='submit' className='btn btn-danger'>Add Review</button>
                                        </div>
                                    </form>
                                    <div className="status"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    :
                    <h2 className='text-center mt-5 text-danger'>Please login to add a review</h2>
            }

        </div>
    );
};

export default ServicesDetails;