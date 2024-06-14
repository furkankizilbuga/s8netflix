/* eslint-disable react/prop-types */
import { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const Form = styled.form`
    text-align: center;
    padding-top: 6vw;
    margin-bottom: 9vw;
`
const Title = styled.h1`
    color: white;
    font-size: 2.6vw;
    font-weight: bold;
`
const Description = styled.p`
    color: white;
    font-size: 1.25vw;
    margin-top: -1vw;
`
const Label = styled.label`
    color: white;
    font-size: 1.05vw;
`

const Input = styled.input`
    background: #00000075;
    padding: 1vw;
    padding-right: 10vw;
    padding-left: .8vw;
    border-radius: 5px;
    color: white;
    border: 1px solid rgb(90, 90, 90);
    width: 44.5%;
    

    &::placeholder {
        color: #b4b4b4;
        font-size: .8vw;
    }

    
`

const Button = styled.button`
    font-weight: bold;
    font-size: 1.2vw;
    background: red;
    display: inline-block;
    padding: 0.7vw 1.5vw;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    border: none;
    max-height: 3vw;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: .7vw;
`

const FormFeedback = styled.p`
    color: red;
    padding-left: 10px;
`

const SubInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default function Membership(props) {
    
    const history = useHistory();
    const [inValid, setInValid] = useState(false);

    const { startEmail, setFormData, formData, setStartEmail } = props;


    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const emailHandler = (event) => {
        setStartEmail(event.target.value)
        setInValid(false);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(validateEmail(startEmail)){
            setFormData({...formData, ["email"]: startEmail})
            history.push("/login")
            setStartEmail("")
            
        }
        
        else setInValid(true)
    }


    return(
        <Form onSubmit={submitHandler}>
            <Title>Unlimited movies, TV shows, and more</Title>
            <Description>Watch anywhere. Cancel anytime.</Description>
            <Label>Ready to watch? Enter your mail to create or restart your membership.</Label><br/>
            <InputContainer>
            <SubInput>
                <Input data-cy="first-email" onChange={emailHandler} value={startEmail} placeholder="Email address" />
                {inValid && <FormFeedback data-cy="first-email-error">Please enter a valid email.</FormFeedback>}
            </SubInput>
                <Button data-cy="first-get-started">Get Started {">"}</Button>
            </InputContainer>
            
        </Form>
    )
}