import React from 'react'
import styled from 'styled-components'
import logo from './../assets/logo.png'
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
height: 96px;
align-items: center;
`
function Navbar() {
    return (
        <Wrapper>
            <div className='box-1'>
                <img className='box-1-logo' src={logo} alt='logo'/>
            </div>
            <div className='box-2'>
                <div>Career</div>
                <div>Blogs</div>
                <div>Leaderboard</div>
                <div>Fees</div>
                <div><button className='nav-button'>TRADE NOW</button></div>        
        
            </div>
        </Wrapper>
    )
}

export default Navbar