import React from 'react';

export default function Gbio ({ movie }) {
    
    if (!movie) {
        return <div>Select a flim</div>;
    }
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <div>
                <strong>Director</strong>: {movie.director}
            </div>
            <div>
                <strong>Released</strong>: {movie.release_date}
            </div>
        </div>
    );
}