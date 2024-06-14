/* eslint-disable react/prop-types */
import { useState } from "react";
import { profilesData } from "../../profilesData";
import styled from "styled-components";
import Profile from "./Profile";

export default function Profiles(props) {

    const ProfilesContainer = styled.div`
        display: flex;
        gap: 2rem;
        justify-content: center;
    `

    const [profiles, setProfiles] = useState(profilesData)
    const {setActiveProfile} = props;

    return (
        
            <ProfilesContainer>
                {profiles.map((profile) => {
                    return <Profile data-cy="user-card" key={profile.id} profile={profile} setActiveProfile={setActiveProfile} />
                })}
            </ProfilesContainer>
        
    )
}