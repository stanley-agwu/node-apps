import React, { useState } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
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

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies{
        movies {
            id
            name
            yearOfRelease
            isInCinemas
        }
    }
`;

const SEARCH_MOVIE_BY_NAME = gql`
query GetMovieByName($name: String!) {
  movie(name: $name) {
    name
    yearOfRelease
  }
}
`;

const DisplayData = () => {
    const [movieSearched, setMovieSearched] = useState('');

    const { data: userData, loading: userLoading, error: userError } = useQuery(QUERY_ALL_USERS);
    const { data: movieData, loading: movieLoading, error: movieError } = useQuery(QUERY_ALL_MOVIES);
    const [ fetchMovie, { data: movieSearchedData, error: movieFetchedError} ] = useLazyQuery(SEARCH_MOVIE_BY_NAME);
    const usersList = userLoading ? <div>Loading users data ...</div> : 
        userError ? <div>Error : {userError}</div> :
        userData ? userData.users.map((user, index) => {
            return(
                <div className='user' key={index}>
                    <div><span className='user-title'>Name: </span>{user.name}</div>
                    <div><span className='user-title'>Age: </span>{user.age}</div>
                    <div><span className='user-title'>Username: </span>{user.username}</div>
                    <div><span className='user-title'>Nationality: </span>{user.nationality}</div>
                </div>
                )
            }) :
        'There are no users data to display';
    const moviesList = movieLoading ? <div>Loading movies data ...</div> : 
    movieError ? <div>Error : {movieError}</div> :
    movieData ? movieData.movies.map((movie, index) => {
        return(
            <div className='user' key={index}>
                <div><span className='user-title'>Movie Title: </span>{movie.name}</div>
                <div><span className='user-title'>The Year of Release: </span>{movie.yearOfRelease}</div>
                <div><span className='user-title'>Featured in Cinema: </span>{`${movie.isInCinemas}`}</div>
            </div>
            )
        }) :
    'There are no users data to display';
    return ( 
        <div className='container'>
            <div className='data'>{usersList}</div>
            <div className='data'>{moviesList}</div>
        </div>
         
        );
}
 
export default DisplayData;