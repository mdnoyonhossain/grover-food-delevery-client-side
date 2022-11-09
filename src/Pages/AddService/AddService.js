import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const AddService = () => {
    useTitle('Add Service')

    const handleSubmit = event => {
        event.preventDefault();
        
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const serviceUrl = form.serviceUrl.value;
        const serviceDes = form.serviceDes.value;

        const services = {
            serviceName,
            servicePrice,
            serviceUrl,
            serviceDes
        }        
        
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Services Added Successfully')
            }
            form.reset();
        })
    }

    return (
        <section className="mb-4 container p-5 rounded" style={{ backgroundColor: '#FEF5F5' }}>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Add Service</h2>
            <div className="row">
                <div className="col-md-8 m-auto mb-md-0 mb-5">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="serviceName" placeholder='Service Name' className="form-control" required />
                                    <br />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" name='servicePrice' placeholder='Service Price' className="form-control" required />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="serviceUrl" placeholder='Service URL' className="form-control" required />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" id="message" placeholder='Service Description' name="serviceDes" rows="2" className="form-control md-textarea" required></textarea>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-md-left">
                            <button type='submit' className='btn btn-danger'>Add Services</button>
                        </div>
                    </form>
                    <div className="status"></div>
                </div>
            </div>
        </section>

    );
};

export default AddService;