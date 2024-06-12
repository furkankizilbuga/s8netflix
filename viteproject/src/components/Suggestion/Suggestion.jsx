/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios"
import Movies from "./Movies";

export default function Suggestion(props)
 {
    const Title = styled.h2`
        color: white;
        text-align: left;
    `

    const Card = styled.div`
        padding: 1rem;
    `

    const {suggestion} = props;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("https://movies-api14.p.rapidapi.com/" + suggestion.category, {
            headers: {
                "x-rapidapi-key": "ce04038e2msh104054e193ec289p18cdf9jsnb6a4a44d19e9",
                "x-rapidapi-host": "movies-api14.p.rapidapi.com"
            }
        })
        .then(response => {
            setMovies(response.data.movies.slice(0, 6))
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