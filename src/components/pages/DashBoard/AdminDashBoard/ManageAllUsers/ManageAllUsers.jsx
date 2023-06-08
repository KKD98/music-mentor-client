import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageAllUsers = () => {

    const {data: users = [] , refetch} = useQuery(['users'] , async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    return (
        <div>
            <p>Manage all users: {users.length}</p>
        </div>
    );
};

export default ManageAllUsers;