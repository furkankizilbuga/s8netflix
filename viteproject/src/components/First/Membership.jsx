/* eslint-disable react/prop-types */
import styled from "styled-components"

const Form = styled.form`
    text-align: center;
    padding-top: 6vw;
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
    padding: .8vw;
    padding-right: 10vw;
    padding-left: .8vw;
    border-radius: 5px;
    color: white;

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
    padding: 0.6vw 1.4vw;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    border: none;
`

const InputContainer = styled.form`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: .7vw;
`

export default function Membership(props) {

    //Get Started'a tıklandığında input'u 
    //Login formuna aktarıp formData.email olarak tanımlayacak.

    const { startEmail, setStartEmail } = props;

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const emailHandler = (event) => {
        if(validateEmail(event.target.value))
        setStartEmail(event.target.value)
        //valid değil ise hata mesajı 
    }

    const submitHandler = (event) => {
        event.preventDefault()
        
    }


    return(
        <Form onSubmit={submitHandler}>
            <Title>Unlimited movies, TV shows, and more</Title>
            <Description>Watch anywhere. Cancel anytime.</Description>
            <Label>Ready to watch? Enter your mail to create or restart your membership.</Label><br/>
            <InputContainer>
                <Input onChange={emailHandler} value={startEmail} placeholder="Email address" />
                <Button>Get Started {">"}</Button>
            </InputContainer>
        </Form>
    )
}