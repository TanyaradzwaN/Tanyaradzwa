import React from 'react'
import styled from 'styled-components';
import './Style.css'


const AboutContainer = styled.div`
    display: flex;
    background-color: #F5EFE6;
    align-items: center;
    padding: 0 80px 100px 0;

@media (max-width: 575px) {
    flex-direction: column;
    padding: 0 20px 50px 30px;
};
@media (min-width: 568px) and (max-width: 767px){
    flex-direction: column;
    padding: 0 20px 50px 30px; 
}
@media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    padding: 0 20px 50px 40px; 
}
@media (min-width: 992px) and (max-width: 1199px) {
}
`;

const AboutText = styled.p`
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    line-height: 45px;
    color: #120404;
    margin-top: 30px;
    font-weight: 100;

@media (max-width: 575px) {
    font-size: 17px;
    line-height: 1.9;
};
@media (min-width: 568px) and (max-width: 767px){
    font-size: 19px;
    line-height: 1.9;   
}
@media (min-width: 768px) and (max-width: 991px) {
    font-size: 24px;
    line-height: 1.9;  
}
@media (min-width: 992px) and (max-width: 1199px) {
}
`;

export const AboutHeading = styled.h2`
    color: #525252;
    font-size: 60px;
    font-weight: 700;
    padding: 100px 0 50px 80px;
    width: 100%;
    background-color: #F5EFE6;


@media (max-width: 575px) {
    font-size: 40px;
    padding: 50px 0 50px 30px;
};
@media (min-width: 568px) and (max-width: 767px){
    font-size: 40px;
    padding: 50px 0 50px 30px;  
}
@media (min-width: 768px) and (max-width: 991px) {

}
@media (min-width: 992px) and (max-width: 1199px) {
}

`



function About (){
  return (
    <>
    <AboutHeading>About</AboutHeading>
    <AboutContainer>
        <div>
            <img src={process.env.PUBLIC_URL + "images/about.svg"} className='AboutImage' alt="Kudakwashe Sachirahwe, UI/UX Designer " />
        </div>
        <div>
            <AboutText>
            Hi, I'm Tanya, a frontend developer passionate about bringing creative ideas to 
            life on the web. With expertise in HTML, CSS, Tailwind CSS, Git, GitHub, ReactJS, 
            NodeJS, and Express, I design and build responsive, user-friendly websites 
            and applications that prioritize seamless user experiences. 
            </AboutText>
        
            <AboutText>
            I love crafting clean, efficient code and continuously exploring new technologies 
            to elevate each project I take on. Welcome to my portfolio—take a look at what 
            I've created!
            </AboutText>
        </div>
    </AboutContainer>
    </>
  )
}

export default About;