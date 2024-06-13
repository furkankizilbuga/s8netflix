/* eslint-disable react/prop-types */
import Login from "../components/Login/Login";
import LoginFooter from "../components/Login/LoginFooter";
import LoginHeader from "../components/Login/LoginHeader";
import styled from "styled-components"

const LoginContainer = styled.main`
    background: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`

export default function LoginPage(props) {

    const { formData, setFormData, startEmail, setStartEmail} = props;


    return (
        <LoginContainer>
            <LoginHeader />
            <Login formData={formData} setFormData={setFormData} startEmail={startEmail} setStartEmail={setStartEmail} />
            <LoginFooter />
        </LoginContainer>
    )
}