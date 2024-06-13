/* eslint-disable react/prop-types */
import Header from "../components/First/Header";
import styled from "styled-components"
import Membership from "../components/First/Membership";

const Background = styled.div`
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 37vw;
        background-size: cover;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.897) 0, #00000075 60%, rgba(0, 0, 0, 0.897) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/d49a8043-59a7-49aa-8b50-2ea910e12934/TR-tr-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg");
    `
    const Column = styled.div`
        
    `

export default function First(props) {

    const { setStartEmail, startEmail, setFormData, formData } = props;

    

    return (
        <Background>
            <Column>
                <Header />
                <Membership formData={formData} setFormData={setFormData} setStartEmail={setStartEmail} startEmail={startEmail} />
            </Column>
        </Background>  
    )
}