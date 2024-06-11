/* eslint-disable react/prop-types */
import styled from "styled-components"

export default function Movie(props) {

    const { movie } = props;

    const Card = styled.img`
        width: 16%;
    `

    return(
        <Card src={movie.poster} />
    )
}