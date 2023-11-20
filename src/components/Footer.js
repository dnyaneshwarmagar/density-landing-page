import React from 'react'
import logo from './../assets/logo.png'
import socials from './../assets/socials.png'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
    text-align: center;
    background-color: #229751;
    width: 100%;
    font-size: 14px;
    padding:64px 0;
`
const Box = styled.div`
  display: flex;
    justify-content: center;
    text-align: center;
    gap:40px;
    margin:30px 0px;
`
function Footer() {
    return (
        <Container>
            <div><img src={logo} alt='' /></div>
            <Box className='footer-box'>
                <div>Privacy Policy</div>
                <div>Trading Policy</div>
                <div>Terms & Conditions</div>
                <div>Cookie Policy</div>
                <div>KYC-AML Policy</div>
                <div>Risk disclosure</div>
                <div>Research Disclaimer</div>
            </Box>
            <div>
                <p>Density was started with the vision of democratising money for everyone. With the idea of derivatives made simple, use </p>
                <p>Density to maximise profits and a hassle free experience.</p>
            </div>
            <div>
                <img src={socials} alt='' />
            </div>
        </Container>
    )
}

export default Footer