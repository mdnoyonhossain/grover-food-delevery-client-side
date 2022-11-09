import React from 'react';

const ReviewsRow = ({ review, handleDelete }) => {
    const { serviceName, servicePrice, name, email, rating, _id, phone } = review;

    return (
        <tr>
            <td>image</td>
            <td>{serviceName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>${servicePrice}</td>
            <td>{phone}</td>
            <td>Star: {rating}</td>
            <td>

                <button type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Update
                </button>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            </td>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Review: <span className='text-danger'>{serviceName}</span></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form >
                                <input class="form-control form-control-sm m-2" defaultValue={name} type="text" placeholder="Review User" aria-label=".form-control-sm example" />
                                <input class="form-control form-control-sm m-2" type="text" defaultValue={email} placeholder="Email" aria-label=".form-control-sm example" /> 
                                <input class="form-control form-control-sm m-2" type="text" defaultValue={phone} placeholder="Phone Number" aria-label=".form-control-sm example" />
                                <input class="form-control form-control-sm m-2" type="text" defaultValue={rating} placeholder="Rating" aria-label=".form-control-sm example" />
                                <button type='submit' className='btn btn-danger'>Update</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default ReviewsRow;