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

    const {suggestion, activeProfile} = props;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("https://moviesdb5.p.rapidapi.com/", {
            headers: {
                "x-rapidapi-key": "eb0661b9d1mshe0f643a2b3b4307p186962jsn2923ed33c99d",
                "x-rapidapi-host": "moviesdb5.p.rapidapi.com"
            }
        })
        .then(response => {
            setMovies(response.data.slice(0, 6))
        })
        .catch(err => {
            console.warn(err)
        })
    }, [activeProfile])



    return(
        <Card>
            <Title>{suggestion.title}</Title>
            <Movies movies={movies} />
        </Card>
    )
}