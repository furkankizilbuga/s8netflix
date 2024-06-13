import styled from "styled-components"

const Main = styled.footer`
    background: #f3f3f3;
    width: 100vw;
    margin-top: 4vw;
    padding: 3vw 0;
    padding-bottom: .2vw;
`
const SubContainers = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5vw;
    gap: .6vw;
`
const Link = styled.a`
    color: #949494;
    font-size: 15px;
    text-decoration: none;
`
const SecondaryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 16vw;
`
const Dropdown = styled.select`
        background: rgba(0, 0, 0, 0);
        color: #949494;
        font-size: .85vw;
        padding: .3vw 1.2vw;
        border-radius: 4px;
        margin-top: .7vw;
    `

export default function LoginFooter() {
    return(
        <Main>
            <SecondaryContainer>
                <SubContainers>
                    <Link href="">Questions? Contact us.</Link>
                    <Link href="">FAQ</Link>
                    <Link href="">Privacy</Link>
                    <Link href="">Contact Us</Link>
                    <Dropdown name="language" id="language">
                        <option style={{color: "black"}} value="english">English</option>
                        <option style={{color: "black"}} value="türkçe">Türkçe</option>
                    </Dropdown>
                </SubContainers>
                <SubContainers>
                    <Link href="">Help Center</Link>
                    <Link href="">Cookie Preferences</Link>
                </SubContainers>
                <SubContainers>
                    <Link href="">Netflix Shop</Link>
                    <Link href="">Corporate Information</Link>
                </SubContainers>
                <SubContainers>
                    <Link href="">Terms of Use</Link>
                </SubContainers>
            </SecondaryContainer>
        </Main>
    )
}