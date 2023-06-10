import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useStudent from '../../../hooks/useStudent';

const SingleClass = ({classItem}) => {
    const {_id, class_image, class_name, instructor_name, available_seats, price} = classItem;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isStudent] = useStudent();

    const handleSelectClass = item => {
        console.log(item);

        if(user && user.email){
            const classItem = {classItemId: _id, class_name, class_image, price, available_seats, instructor_name, email: user.email};
            fetch('http://localhost:5000/selectedclasses', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${class_name} class is selected`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to select class',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login' , {state: {from: location}})
                }
              })
        }
    }

    const cardStyle = {
        backgroundColor: available_seats === 0 ? 'red-700' : 'black'
      };
    
    return (
        <div key={_id} className={`card w-full bg-${cardStyle.backgroundColor} text-white shadow-xl`}>
            <figure><img className='p-5 w-full h-64' src={class_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name} Class</h2>
                <p>Instructor Name: {instructor_name}</p>
                <p>Available seats: {available_seats}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">
                   {
                    isStudent && available_seats > 0 ? <button onClick={() => handleSelectClass(classItem)} className="btn bg-rose-700 hover:bg-rose-900 text-white border-none">Select</button>
                   :
                   
                   <button disabled className="btn bg-rose-700 hover:bg-rose-900 text-white border-none">Select</button>
                }
                </div>
            </div>
        </div>
    );
};

export default SingleClass;