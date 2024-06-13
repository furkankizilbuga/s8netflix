import styled from "styled-components"

const Container = styled.footer`
    background: black;
    border-top: 7px solid rgb(37, 37, 37);
    padding-top: 3vw;
` 
const SubContainers = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5vw;
    gap: .6vw;
`
const Link = styled.a`
    color: #b8b8b8;
    font-size: .8vw;
`
const SecondaryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 16vw;
`
const Dropdown = styled.select`
        background: rgba(0, 0, 0, 0);
        color: white;
        font-size: .85vw;
        padding: .3vw 1.2vw;
        border-radius: 4px;
        margin-top: .7vw;
    `
    
export default function Footer() {
    return(
        <Container>
            <SecondaryContainer>
                <SubContainers>
                    <Link href="">Questions? Contact us.</Link>
                    <Link href="">FAQ</Link>
                    <Link href="">Investor Relations</Link>
                    <Link href="">Terms of Use</Link>
                    <Link href="">Contact Us</Link>
                    <Dropdown name="language" id="language">
                        <option style={{color: "black"}} value="english">English</option>
                        <option style={{color: "black"}} value="türkçe">Türkçe</option>
                    </Dropdown>
                </SubContainers>
                <SubContainers>
                    <Link href="">Help Center</Link>
                    <Link href="">Jobs</Link>
                    <Link href="">Privacy</Link>
                    <Link href="">Speed Test</Link>
                </SubContainers>
                <SubContainers>
                    <Link href="">Account</Link>
                    <Link href="">Redeem Gift Cards</Link>
                    <Link href="">Cookie Preferences</Link>
                    <Link href="">Legal Notices</Link>
                </SubContainers>
                <SubContainers>
                    <Link href="">Media Center</Link>
                    <Link href="">Ways to Watch</Link>
                    <Link href="">Corporate Information</Link>
                    <Link href="">Only on Netflix</Link>
                </SubContainers>
            </SecondaryContainer>
        </Container>
    )
}