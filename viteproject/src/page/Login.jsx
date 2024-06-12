/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const Form = styled.form`
    padding-top: 1.5rem;
`
const Label = styled.label`
    font-size: 1.1rem;
`
const Input = styled.input`
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .5rem;

    &.inline-input {
        display: inline;
        width: initial;
    }
`
const Button = styled.button`
    width: 100%;
    background: red;
    color: white;
    padding: 1rem;
    text-align: center;
    border-radius: .5rem;
`
const Row = styled.div`
    margin-bottom: 1rem;
`
const Step = styled.p`
    font-size: .8em;
`
const Description = styled.p`
    font-size: 1.1em;
`
const Title = styled.p`
    font-size: 2rem;
    margin-top: .5rem;
`
const ErrorMessage = styled.p`
    padding: .5rem;
    color: red;
    background: #ff8f8f;
    border-radius: .3rem;
`


const initialFormData = {
    email: "",
    password: "",
    terms: false
}

const errorMessages = {
    email: "Geçerli bir email adresi giriniz!",
    password: "Password alanına strong password giriniz!",
    terms: "Devam etmeden önce anlaşma şartlarını kabul ediniz!"
}

export default function Login() {

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        terms: false
    })

    const [isValid, setIsValid] = useState(false)

    const history = useHistory()

    const submitHandler = (event) => {

        event.preventDefault()

        if(!isValid) return;

        const URL = "";
        axios.post(URL, formData)
        .then(res => {
            setFormData(initialFormData);
            history.push("/welcome")
            console.log(res.data)
        })
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const validatePassword = (password) => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
        return regex.test(password)
    }

    const emailHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
        if(validateEmail(event.target.value)) {
            setErrors({...errors, [event.target.name]: false})
        } else {
            setErrors({...errors, [event.target.name]: true})
        }
    }

    const passwordHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
        if(validatePassword(event.target.value)) {
            setErrors({...errors, [event.target.name]: false})
        } else {
            setErrors({...errors, [event.target.name]: true})
        }
    }

    const termsHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.checked })
        if(event.target.checked) {
            setErrors({...errors, [event.target.name]: false})
        } else {
            setErrors({...errors, [event.target.name]: true})
        }
        }


    useEffect(() => {
        if(errors.email === false && errors.password === false && errors.terms === false) {
            setIsValid(true)
        } else setIsValid(false)
    }, [formData])

        return(
            <Form onSubmit={submitHandler}>
                <Step>STEP 1 OF 3</Step>
                <Title>Login to Continue</Title>
                <Description>Just a few more steps and you're done!</Description>
                <Row>
                    <Label htmlFor="email" >Email:</Label>
                    <Input onChange={emailHandler} id="email" name="email" placeholder="Add an email" value={formData.email} />
                    {errors.email && <ErrorMessage>{errorMessages.email}</ErrorMessage>}
                </Row>
                <Row>
                    <Label htmlFor="password" >Password:</Label>
                    <Input onChange={passwordHandler} id="password" name="password" type="password" placeholder="Add a password" value={formData.password} />
                    {errors.password && <ErrorMessage>{errorMessages.password}</ErrorMessage>}
                </Row>
                <Row>
                    <Input className="inline-input" onChange={termsHandler} type="checkbox" id="terms" name="terms" checked={formData.terms} />
                    <Label htmlFor="terms" >Please accept the terms required.</Label>
                    {errors.terms && <ErrorMessage>{errorMessages.terms}</ErrorMessage>}
                </Row>
                <Row>
                    <Button disabled={!isValid} >Login</Button>
                </Row>               
            </Form>
        )
    }

    
