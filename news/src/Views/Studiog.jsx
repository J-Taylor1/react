import React, { useState} from 'react';
import Gfilm from '../Components/Gfilm';
import Gbio from '../Components/Gbio';

export default function Studiog() {
    const [movie, setMovie] = useState(null);

    return (
        <div>
            <h1>Studio Ghibli News</h1>
            <Gfilm info={setMovie} />
            <Gbio movie={movie} />
        </div>
    )
}