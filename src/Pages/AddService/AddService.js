import React from 'react';


const AddService = () => {

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
            console.log(data);
        })
    }

    return (
        <section class="mb-4 container p-5 rounded" style={{ backgroundColor: '#FEF5F5' }}>
            <h2 class="h1-responsive font-weight-bold text-center my-4">Add Service</h2>
            <div class="row">
                <div class="col-md-8 m-auto mb-md-0 mb-5">
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="serviceName" placeholder='Service Name' class="form-control" />
                                    <br />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" name='servicePrice' placeholder='Service Price' class="form-control" />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="serviceUrl" placeholder='Service URL' class="form-control" />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                    <textarea type="text" id="message" placeholder='Service Description' name="serviceDes" rows="2" class="form-control md-textarea"></textarea>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div class="text-center text-md-left">
                            <button type='submit' className='btn btn-danger'>Add Services</button>
                        </div>
                    </form>
                    <div class="status"></div>
                </div>
            </div>
        </section>

    );
};

export default AddService;