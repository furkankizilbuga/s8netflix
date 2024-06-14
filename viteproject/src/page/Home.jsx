/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { userSuggestionsData } from "../userSuggestions";
import Suggestion from "../components/Suggestion/Suggestion";
import HomeHeader from "../components/Home/HomeHeader";
import styled from "styled-components"

const Background = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.445) 0, #0000001c 60%, rgba(0, 0, 0, 0.055) 100%), url("https://occ-0-4451-1432.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf7w7rjcaIse1eKuN-Jt6rfVEvQ5Jm6I0FOTn-gezpAH5QPNyMmM5ldBH-QMibEMuAeWLMLRmz1aIKW9aNaAJ3LNiXUkDGQrJ_9v.webp?r=489");
    height: 90%;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`

`
export default function Home(props) {

    const { activeProfile, setActiveProfile } = props;

    const [suggestions, setSuggestions] = useState([])
    

    useEffect(() => {
        const suggestionData = userSuggestionsData[activeProfile.id]
        setSuggestions(suggestionData)
    }, [activeProfile])
        
    

    return(
        <Background>
            <Wrapper>
                <HomeHeader setActiveProfile={setActiveProfile} activeProfile={activeProfile} />
                {suggestions.map((suggestion, index) => {
                    return <Suggestion activeProfile={activeProfile} key={index} suggestion={suggestion} />
                })}
            </Wrapper>
        </Background>
    )
}