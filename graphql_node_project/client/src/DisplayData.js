import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users {
            id
            name
            age
            username
            nationality
        }
    }
`;

const DisplayData = () => {
    const { data, loading, error } = useQuery(QUERY_ALL_USERS);
    console.log(data)
    const usersList = loading ? <div>Loading data ...</div> : 
        error ? <div>Error : {error}</div> :
        data ? data.users.map((user, index) => {
            return(
                <div className='user' key={index}>
                    <div><span className='user-title'>Name: </span>{user.name}</div>
                    <div><span className='user-title'>Age: </span>{user.age}</div>
                    <div><span className='user-title'>Username: </span>{user.username}</div>
                    <div><span className='user-title'>Nationality: </span>{user.nationality}</div>
                </div>
                )
            }) :
        'There are no data to display';
    return ( 
        <div className='data'>{usersList}</div> 
        );
}
 
export default DisplayData;