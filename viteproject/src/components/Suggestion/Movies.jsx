import styled from "styled-components"
import Movie from "./Movie";

export default function Movies(props) {

    const Card = styled.div`
        display: flex;
        justify-content: space-between;
    `

    const { movies } = props;

    

    return (
        <Card>
            {movies.map((movie) => {
                return <Movie key={movie.id} movie={movie} />
            })}
        </Card>
    )
}