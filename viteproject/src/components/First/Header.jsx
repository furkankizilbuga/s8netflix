import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import styled from "styled-components"

export default function Header() {

    const history = useHistory();

    const Main = styled.header`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 5vw;
        padding-bottom: 1.1vw;
        background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.767) 100%);
    `
    const Button = styled.button`
        background: red;
        font-weight: bold;
        color: white;
        padding: .48vw .8vw;
        width: 100%;
        max-width: 200px;
        text-align: center;
        font-size: 0.75vw;
        border-radius: 4px;
        cursor: pointer;
        border: none;
    `
    const Dropdown = styled.select`
        background: rgba(0, 0, 0, 0);
        color: white;
        font-size: .85vw;
        padding: .3vw 1.2vw;
        border-radius: 4px;
    `
    const RightHeader = styled.div`
        display: flex;
        align-items: center;
        gap: 1.4vw;
    `

    const Baslik = styled.h1`
        color: red;
        font-size: 2.3vw;
        padding: 0;
        cursor: default;

    `
    const buttonHandler = () => {
        history.push("/login")
    }

    return(
        <Main>
            <Baslik>NETFLIX</Baslik>
            <RightHeader>
                <Dropdown name="language" id="language">
                    <option style={{color: "black"}} value="english">English</option>
                    <option style={{color: "black"}} value="türkçe">Türkçe</option>
                </Dropdown>
                <Button onClick={buttonHandler}>Sign In</Button>
            </RightHeader>
        </Main>
    )
}