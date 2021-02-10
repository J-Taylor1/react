import React,{useState,useEffect} from 'react';

function Headlines() {

    const HEADLINES_URL = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=195a675e7375432baaa5c74444fbb7ad'
    const[articles,setArticles] = useState([]);

    useEffect(() => {
        fetch (HEADLINES_URL)
            .then(raw => raw.json())
            .then(res => {
                console.log(res);
                setArticles(res.articles);
            })
    }, []);

    return (
        <div>
            <h1>Headline News goes here: </h1> 
            <p>This should be on the main home page</p>
            <main>
                <ul>
                {articles.map(a => (
                    <li key={a.publishedAt}>
                        <a href={a.url}>{a.title}</a>
                        <img src={a.urlToImage} alt=""/>
                    </li>
                ))}
                </ul>
            </main>
        </div>
    )
}

export default Headlines;