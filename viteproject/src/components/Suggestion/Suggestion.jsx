import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios"

export default function Suggestion(props)
 {
    const Title = styled.h2`
        color: white;
    `

    const Card = styled.div`
        padding: 1rem;
    `

    const {suggestion} = props;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("https://reqress.in/api/users/" + category)
        .then(response => {
            setMovies(response.data)
        })
        .catch(err => {
            console.warn(err)
        })
    }, [])



    return(
        <Card>
            <Title>{suggestion.title}</Title>
            <Movies movies={movies} />
        </Card>
    )
}