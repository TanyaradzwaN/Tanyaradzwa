import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaFacebook, FaLinkedin, } from 'react-icons/fa';


const GlobalFooter = styled.div`
    text-align: center;
    background-color: #EFE7DC;
    padding: 30px 0;

`
const FooterContent =styled.h4`
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0 30px;
    letter-spacing: 1px;
    text-align: center;
`
const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

function Footer() {
  return (
    <GlobalFooter>
        {/* <FooterContent>Kuda Sachie</FooterContent> */}
        <FooterContent>Follow @Tanyaradzwa Nyamusara</FooterContent>
        <FooterIcons>
            {/* <a href="https://twitter.com/KudaSachie" className='IconsStyles fi'><FaTwitter/></a> */}
            <a href="https://www.linkedin.com/in/tanyaradzwa-nyamusara-98ab37184/" className='IconsStyles fi'><FaLinkedin/></a>
            <Link to="https://github.com/tanyaradzwa20?tab=repositories" className='IconsStyles'><img src='images/git.png' alt='TanyaradzwaNyamusara' className='iconImage'/></Link>
            <a href="https://www.facebook.com/tanyaradzwa.nyamusara" className='IconsStyles fi'><FaFacebook/></a>
            {/* <a href="https://www.instagram.com/kudah_sachie/?hl=en/https://www.instagram.com/kudah_sachie/?hl=en" className='IconsStyles fi'><FaInstagram/></a> */}
        </FooterIcons>
    </GlobalFooter>
    
  )
}

export default Footer