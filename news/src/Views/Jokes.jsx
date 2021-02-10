import React, {useState, useEffect} from 'react';


function Jokes() {

    const JOKES_URL = 'https://official-joke-api.appspot.com/random_ten'

    const [jokeyjoke, setJokeyJoke] = useState([]);

    useEffect(() => {
        fetch(JOKES_URL)
            .then(raw => raw.json())
            .then(res => {
                console.log(res);
                setJokeyJoke(res);
            })
    }, []);




    return (
        <div>
            <h1>Random Jokes goes here: </h1>
            <main>
                {jokeyjoke.map(a => (
                 <ul>
                    <li key ={a.id}>{a.setup}
                    <ul><li key>{a.punchline}</li></ul></li>
                </ul>
                
                ))}
            </main>
            
           
        </div>
    )
}

export default Jokes;