import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import ReviewsRow from './ReivewsRow';

const AddReview = () => {
    const { user } = useContext(UserContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const agree = window.confirm('Are you Sure, you want to cancle this Review');
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                        const reminingReviews = reviews.filter(rev => rev._id !== id)
                        setReviews(reminingReviews)
                    }
                })
        }
    }


    return (
        <div>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Review</b></h2>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Review User</th>
                                    <th>Email</th>
                                    <th>Service Price</th>
                                    <th>Phone</th>
                                    <th>Rating</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reviews.map(review => <ReviewsRow key={review._id} review={review} handleDelete={handleDelete}></ReviewsRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            
        </div>
    );
};

export default AddReview;