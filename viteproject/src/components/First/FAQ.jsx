/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Accordion from "./Accordion"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    border-top: 7px solid rgb(37, 37, 37);
    padding-bottom: 5vw;
    
`

const Content = styled.p`
    font-size: 1.3vw;
    padding: 0 1vw;
`
const SecondaryContainer = styled.div`
    margin: 0 20vw;
`
const AccordTitle = styled.h2`
    font-size: 2.5vw;
    color: white;
    margin-top: 3.3vw;
    margin-bottom: .6vw;
`

export default function FAQ() {
    
    return(
        <Container>
            <AccordTitle>Frequently Asked Questions</AccordTitle>
            <SecondaryContainer>
            <Accordion title="What is Netflix?">
                <Content>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</Content>
            </Accordion>
            <Accordion title="How much does Netflix cost?">
                <Content>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 119.99 TL to 229.99 TL a month. No extra costs, no contracts.</Content>
            </Accordion>
            <Accordion title="Where can I watch?">
                <Content>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

    You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</Content>
            </Accordion>
            <Accordion title="How do I cancel?">
                <Content>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</Content>
            </Accordion>
            <Accordion title="What can I watch on Netflix?">
                <Content>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</Content>
            </Accordion>
            <Accordion title="Is Netflix good for kids?">
                <Content>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</Content>
            </Accordion>
            </SecondaryContainer>
        </Container>
        
    )
}