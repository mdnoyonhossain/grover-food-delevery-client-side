import React, { useState } from 'react';

const ReviewsRow = ({ review, handleDelete }) => {
    
    const { serviceName, servicePrice, name, email, rating, _id, phone, serviceUrl} = review;
    const [reviews, setReviews] = useState({})

    const handleSubmit = event => {
        event.preventDefault();
        
        fetch(`https://grover-server.vercel.app/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user Information Updated successfully')
                    
                }
                console.log(data);
            })
    }

    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...reviews };
        newUser[field] = value;
        setReviews(newUser);
    }
    
    
    return (
        <tr>
            <td><img src={serviceUrl} style={{width: '70px', borderRadius: '10px'}} alt="" /></td>
            <td>{serviceName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>${servicePrice}</td>
            <td>{phone}</td>
            <td>Star: {rating}</td>
            <td>

                <button type="button" className="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Update
                </button>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            </td>
            <td className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Review: <span className='text-danger'>{serviceName}</span></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <input onChange={handleInputChange} name="name" className="form-control form-control-sm m-2" defaultValue={name} type="text" placeholder="Review User" aria-label=".form-control-sm example" />
                                <input onChange={handleInputChange} name="email" className="form-control form-control-sm m-2" type="text" defaultValue={email} placeholder="Email" aria-label=".form-control-sm example" />
                                <input onChange={handleInputChange} name="phone" className="form-control form-control-sm m-2" type="text" defaultValue={phone} placeholder="Phone Number" aria-label=".form-control-sm example" />
                                <input onChange={handleInputChange} name="rating" className="form-control form-control-sm m-2" type="text" defaultValue={rating} placeholder="Rating" aria-label=".form-control-sm example" />
                                <button type='submit' className='btn btn-danger'>Update</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        
    );
};

export default ReviewsRow;