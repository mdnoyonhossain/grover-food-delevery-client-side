import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import useTitle from '../../hooks/useTitle';
import ReviewsRow from './ReivewsRow';

const AddReview = () => {
    const { user, logOut } = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    useTitle('My Review')

    useEffect(() => {
        fetch(`https://grover-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('grover-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                // console.log('reseve data', data)
                setReviews(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const agree = window.confirm('Are you Sure, you want to cancle this Review');
        if (agree) {
            fetch(`https://grover-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
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
            {
                reviews.length ?
                    <div className="container-xl">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h2><span className='text-danger'>{user?.displayName}</span> Manage Your <b>Review</b></h2>
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
                    :
                    <h1 className='text-center text-danger'>Hello <span className='text-success'>{user?.displayName}</span>, Please Review Added</h1>
            }
            
        </div>
    );
};

export default AddReview;