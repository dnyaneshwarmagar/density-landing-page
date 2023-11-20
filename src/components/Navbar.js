import React from 'react'
import styled from 'styled-components'
import logo from './../assets/logo.png'
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
height: 96px;
align-items: center;
font-size: 14px;
`
const Logo = styled.img`
width: 100px;
height: 24px;
`
const Box = styled.div`
    display:flex;
    justify-content: space-between;
    gap:30px;
    height: 50%;
    align-items: center;
    font-size: 14px;
`
const Button = styled.button`
    background: linear-gradient(85.8452deg, rgb(212, 249, 56) 29.1667%, rgb(50, 216, 117) 100%);
    height: 50px;
    border-radius:8px;
    width: 161px;
`

const Span = styled.span`
font-size: 16px;
font-weight: 700;
`
function Navbar() {
    return (
        <Wrapper>
            <div >
                <Logo className='box-1-logo' src={logo} alt='logo' />
            </div>
            <Box >
                <div>Career</div>
                <div>Blogs</div>
                <div>Leaderboard</div>
                <div>Fees</div>
                <div><Button className='nav-button'><span>TRADE NOW</span></Button></div>

            </Box>
        </Wrapper>
    )
}

export default Navbar