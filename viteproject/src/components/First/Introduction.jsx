import styled from "styled-components"

const Headline = styled.h2`
    color: white;
    font-weight: bold;
    font-size: 45px;
`
const Description = styled.p`
    color: white;
    font-size: 23px;
    margin-top: -30px;
`
const TextContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    

`
const MainContainer = styled.section`
    background: black;
    border-top: 7px solid rgb(37, 37, 37);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vw;
    gap: 10px;
`
const GifContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 40px;
    margin-right: 20px;
    min-width: 500px;
`
const Image = styled.img`
    width: 100%;
    height: auto;
    max-width: 800px;
    position: relative;
    top: .3vw;
    left: .9vw;
    z-index: 1;
`
const Video = styled.video`
    position: absolute;
    top: 5.6vw;
    left: 5.3vw;
    width: 75%;
`

const Download = styled.img`
    background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif");
    width: 15%;
    margin-left: 4vw;
`
const StrangerContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 2vw;
    min-width: 500px;
    display: flex;
    justify-content: center;
`

const Mobile = styled.div`
    position: absolute;
    border-radius: 10px;
    border: 2px solid rgb(88, 88, 88);
    display: flex;
    align-items: center;
    padding: .6vw .5vw;
    gap: 1vw;
    margin: 0 6vw;
    margin-bottom: 6vw;
    top: 17vw;
    left: 1vw;
    z-index: 1;
    background: black;
`

const MiniText = styled.div`
    display: flex;
    flex-direction: column;

`
const StrangerImage = styled.img`
    height: 24vw;
    position: relative;
    top: .3vw;
    left: .5vw;
    z-index: 1;
`

const StrangerPoster = styled.img`
    width: 3vw;
`
const StrangerTitle = styled.p`
    font-weight: bold;
    font-size: .8vw;
    margin-bottom: -1vw;
`
const DownloadText = styled.p`
    color: #3467f1;
    font-size: .8vw;

`
const MacVideo = styled.video`
    position: absolute;
    top: 3vw;
    left: 22%;
    width: 60%;
`


export default function Introduction() {


    return(
        <>
            <MainContainer>
                <TextContainer>
                    <Headline>Enjoy on your TV</Headline>
                    <Description>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Description>
                </TextContainer>
                <GifContainer>
                    <Image src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                    <Video muted autoPlay loop >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
                    </Video>
                </GifContainer>
            </MainContainer>

            <MainContainer> 
                <StrangerContainer>
                <StrangerImage src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                    <Mobile>
                        <StrangerPoster src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                        <MiniText>
                            <StrangerTitle>Stranger Things</StrangerTitle>
                            <DownloadText>Downloading...</DownloadText>
                        </MiniText>
                        <Download src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" />
                    </Mobile>
                </StrangerContainer>
                <TextContainer>
                    <Headline>Download your shows to watch offline</Headline>
                    <Description>Save your favorites easily and always have something to watch.</Description>
                </TextContainer>
            </MainContainer>

            <MainContainer>
                <TextContainer>
                    <Headline>Watch everywhere</Headline>
                    <Description>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Description>
                </TextContainer>
                <GifContainer>
                    <Image src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
                    <MacVideo muted autoPlay loop >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
                    </MacVideo>
                </GifContainer>
            </MainContainer>

            <MainContainer>
                <GifContainer>
                    <Image src="https://occ-0-4451-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" />
                </GifContainer>
                <TextContainer>
                    <Headline>Create profiles for kids</Headline>
                    <Description>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</Description>
                </TextContainer>
            </MainContainer>
        </>
    )
}