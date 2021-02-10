import React, {useEffect, useState} from 'react';

function Space() {

    const SPACE_URL = 'https://www.spaceflightnewsapi.net/api/v2/articles?_limit=3'

    const [spaceNews,setSpaceNews] = useState([]);

    useEffect(() => {
        fetch(SPACE_URL)
            .then(raw => raw.json())
            .then(res => {
                console.log(res);
                setSpaceNews(res);
            })
    }, []);



    return (
        <div>
            <h1>Space News</h1>
            <main>
                <ul>
                {spaceNews.map(space => (
                    <li key={space.id}>
                        <a href={space.url}>{space.title}</a>
                        {/* <img src={space.imageUrl} alt=""/> */}
                    </li>
                ))}
                </ul>
            </main>
            
        </div>
    )
}

export default Space;