import styled from "styled-components"

export default function Header() {

    const Main = styled.header`
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px lime solid;
        width: 100vw;
        height: 5vw;
        padding-top: .5rem;
        padding-bottom: 1.5rem;
    `
    const Button = styled.div`
        background: red;
        font-weight: bold;
        color: white;
        padding: .3rem 1rem;
        padding-bottom: .4rem;
        width: 100%;
        max-width: 200px;
        text-align: center;
        font-size: 0.875rem;
        border-radius: 4px;
    `
    const Dropdown = styled.select`
        background: rgba(0, 0, 0, 0);
        color: white;
        font-size: 1rem;
        padding: .3rem 1.2rem;
        border-radius: 4px;
    `
    const RightHeader = styled.div`
        display: flex;
        align-items: center;
        gap: 1.5rem;
    `

    const Baslik = styled.h1`
        color: red;
        font-size: 2.8rem;
        margin: 0;
        padding: 0;
    `

    return(
        <Main>
            <Baslik>NETFLIX</Baslik>
            <RightHeader>
                <Dropdown name="language" id="language">
                    <option style={{color: "black"}} value="türkçe">Türkçe</option>
                    <option style={{color: "black"}} value="english">English</option>
                </Dropdown>
                <Button>Sign In</Button>
            </RightHeader>
        </Main>
    )
}