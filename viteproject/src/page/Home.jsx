import { useEffect, useState } from "react";
import { userSuggestionsData } from "../userSuggestions";
import Suggestion from "../components/Suggestion/Suggestion";

export default function Home(props) {

    const { activeProfile } = props;

    const [suggestions, setSuggestions] = useState([])
    

    useEffect(() => {
        const suggestionData = userSuggestionsData[activeProfile.id]
        setSuggestions(suggestionData)
    }, [activeProfile])
        
    

    return(
        <>
            <div>Home {activeProfile.name}</div>
            {suggestions.map((suggestion, index) => {
                return <Suggestion key={index} suggestion={suggestion} />
            })}
        </>
    )
}