/* eslint-disable react/prop-types */
import Profiles from "../components/Profile.jsx/Profiles";
import styled from "styled-components";

export default function Welcome(props) {

    const Button = styled.div`
        color: gray;
        padding: .5rem 1.5rem;
        border: 1px solid gray;
        display: inline-block; 
    `
    const { setActiveProfile } = props;

    return(
        <>
            <h1>Who's watching?</h1>
            <Profiles setActiveProfile={setActiveProfile} />
            <Button>Manage Profiles</Button>
        </>
    )
}