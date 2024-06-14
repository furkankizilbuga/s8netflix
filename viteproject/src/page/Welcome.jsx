/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Profiles from "../components/Profile/Profiles";
import styled from "styled-components";

export default function Welcome(props) {

    const Button = styled.button`
        color: gray;
        padding: .5rem 1.5rem;
        border: 1px solid gray;
        display: inline-block; 
        cursor: pointer;
        background: none;
    `
    const Container = styled.main`
        padding-top: 15vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const Background = styled.div`
        width: 100vw;
        height: 100%;
        background: #141414;
    `
    const { setActiveProfile } = props;

    return(
        <Background>
        <Container>
            <h1>Who's watching?</h1>
            <Profiles setActiveProfile={setActiveProfile} />
            <Button>Manage Profiles</Button>
        </Container>
        </Background>
    )
}