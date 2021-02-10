import React, {useEffect, useState} from 'react';

export default function Gfilm ({ info }) {

const STU_URL = 'https://ghibliapi.herokuapp.com/films'

const [studio ,setStudio] = useState([]);

useEffect(() => {
    fetch(STU_URL)
     .then(raw => raw.json())
     .then(res => { 
         console.log(res)
         setStudio(res)
         })
}, []) 

return (
    <div>
        <ul>
            {studio &&
                studio.map(s => (
                    <li key={s.id} onClick={e => info(s)}>
                        {s.title}
                    </li>
                ))}
        </ul>
    </div>
);
}
