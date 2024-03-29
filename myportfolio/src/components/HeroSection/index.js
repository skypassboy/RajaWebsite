import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import whatsapp from '../../images/whatsapp.png'
import phone from '../../images/phone.png'
const HeroSection = () => {
    return (
        <div id="about">
            {/* <Title style={{ textAlign: "center", color: "#bcba16" }}>Welcome to Rajendra's Pest Control</Title> */}
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Welcome to Rajendra's Pest Control</Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Download Brochure</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>

            <a href="https://api.whatsapp.com/send?phone=919356891918&text=We%20are%20interested%20in%20Your%20services.%20Please%20Contact%20Me" target="_blank"> <img
                src={whatsapp}
                alt="hero-image"
                
                style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    position: "fixed",
                    top: 65,

                    zIndex: 10,
                    // Media query for mobile devices

                }}
            /></a>
            <a href="tel:9356891918"> <img
                src={phone}
                alt="hero-image"
                style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    position: "fixed",
                    top: 125,

                    zIndex: 10,
                    // Media query for mobile devices

                }}
            /></a>
        </div>
    )
}

export default HeroSection