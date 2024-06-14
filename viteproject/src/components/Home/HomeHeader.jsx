/* eslint-disable react/prop-types */
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { profilesData } from "../../profilesData"

const Main = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 4vw;
        padding-bottom: 1.1vw;
        background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.767) 100%);
    `
const MainTitle = styled.h1`
    color: red;
    margin-left: 2.5vw;
    font-size: 28px;
` 
const NavBar = styled.nav`
    display: flex;
    gap: 1vw;
    padding-left: 2vw;
`
const Nav = styled.button`
    color: #e2e2e2;
    font-size: 15px;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 5px;
`
const UserPanel = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    margin-right: 4vw;

`
const LeftHeader = styled.div`
    display: flex;
    gap: 1vw;
    align-items: center;
`

const SearchButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 1.3vw;
`
const Kids = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`
const Avatar = styled.img`
    width: 1.7vw;
    min-width: 35px;
    border-radius: 5px;
    cursor: pointer;
`
const UserBar = styled.nav`
    display: ${(props) => props.panel === "false" ? "none" : "block" };
    background: black;
    position: absolute;
    padding: .8vw;
    margin-right: 30px;
`
const UserPanelContainer = styled.div`
    position: relative;
`

const Profile = styled.button`
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
`
const ImgName = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Name = styled.p`
    color: #e2e2e2;
    font-size: 15px;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 5px;
`

export default function HomeHeader(props) {
    
    const [panel, setPanel] = useState("false")

    const { activeProfile, setActiveProfile } = props;

    const rest = profilesData.filter(profile => profile.id !== activeProfile.id)

    const userBarHandler = () => {
        setPanel("true");
    }

    const userBarLeave = () => {
        setPanel("false")
    }

    const profileChanger = (profileId) => {
        const selectedProfile = profilesData.find(profile => profile.id === profileId);
        setActiveProfile(selectedProfile);
        setPanel("false");
    }



    return(
        <Main>
            <LeftHeader>
                <MainTitle>NETFLIX</MainTitle>
                <NavBar>
                    <Nav>Home</Nav>
                    <Nav>TV Shows</Nav>
                    <Nav>Movies</Nav>
                    <Nav>New & Popular</Nav>
                    <Nav>My List</Nav>
                    <Nav>Browse by Language</Nav>
                </NavBar>
            </LeftHeader>
            <UserPanelContainer>
            <UserPanel>
                <SearchButton><FontAwesomeIcon icon={faMagnifyingGlass} /></SearchButton>
                <Kids>Kids</Kids>
                <FontAwesomeIcon icon={faBell} />
                <Avatar onMouseLeave={userBarLeave} onMouseEnter={userBarHandler} src={activeProfile.avatar} />
            </UserPanel>
            <UserBar panel={panel} onMouseLeave={userBarLeave} onMouseEnter={userBarHandler} >
                <Profile>
                    {rest.map(profile => {
                        return <ImgName onClick={() => profileChanger(profile.id)} key={profile.id}>
                        <Avatar key={profile.id} src={profile.avatar} />
                        <Name>{profile.name}</Name>
                        </ImgName>
                    })}
                </Profile>
                <Nav>Account Management</Nav>
                <Nav>Transfer Account</Nav><br />
                <Nav>Account</Nav><br />
                <Nav>Help Center</Nav>
            </UserBar>
            </UserPanelContainer>
        </Main>

    )
}