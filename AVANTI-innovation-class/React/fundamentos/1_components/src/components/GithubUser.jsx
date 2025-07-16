import { useEffect, useState } from "react"
import React from 'react'



const GithubUser = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ViniciusGCP94')
        .then(response => response.json())
        .then(data => setData(data))  
        .catch(error => console.error(error))              
    },[])

    return (
        <>
            <img src={data.avatar_url} alt={data.name} />
            <h3>{data.name}</h3>
        </>
    )
}

export default GithubUser