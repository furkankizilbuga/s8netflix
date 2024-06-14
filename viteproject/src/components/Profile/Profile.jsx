/* eslint-disable react/prop-types */
import styled from"styled-components";
import { useHistory } from "react-router-dom";

const Card = styled.div`
    width: 20%;
    max-width: 200px;
    cursor: pointer;
    color: gray;

    &:hover {
        color:white;
    }
`

const Avatar = styled.img`
    width: 100%;
    border-radius: 0.2rem;
`

const Name = styled.h2`
    color: gray;
    text-align: center;
`

function Profile(props) {

    const {profile, setActiveProfile} = props;

    const history = useHistory();

    const activeProfileHandler = () => {
        setActiveProfile(profile);
        history.push("/home")
    }

    return (
        <Card onClick={activeProfileHandler}>
            <Avatar src={profile.avatar} />
            <Name>{profile.name}</Name>
        </Card>
    )
}

export default Profile;