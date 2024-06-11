import Header from "../components/Header";
import styled from "styled-components"

export default function First() {

    const Background = styled.div`
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 70vh;
        background-size: cover;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/d49a8043-59a7-49aa-8b50-2ea910e12934/TR-tr-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg");
    `


    return (
        <Background>
          <Header />
        </Background>
    )
}