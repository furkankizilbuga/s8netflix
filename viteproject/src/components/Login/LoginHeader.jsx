import styled from "styled-components"

const Header = styled.header`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #cecece;
`

const Baslik = styled.h1`
    color: red;
    font-size: 2.3vw;
    padding-left: 2vw;
    cursor: default;
`
const Button = styled.button`
    border: none;
    color: black;
    cursor: pointer;
    background: none;
    font-weight: bold;
    font-size: 18px;
    padding-right: 2vw;
`

export default function LoginHeader() {
    return(
        <Header>
            <Baslik>NETFLIX</Baslik>
            <Button>Sign Up</Button>
        </Header>
    )
}