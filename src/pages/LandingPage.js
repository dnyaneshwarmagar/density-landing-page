import React from 'react'
import './index.css'
import IphoneGroupImg from './../assets/iphone-group.png'
import groupOneOne from './../assets/group-1-1.png'
import groupOneTwo from './../assets/group-1-2.png'
import groupOneThree from './../assets/group-1-3.png'
import groupThree from './../assets/group-3.png'
import groupFour from './../assets/group-4.png'
import groupFive from './../assets/group-5.png'
import whiteOneOne from './../assets/white-div-img-1.png'
import whiteOneTwo from './../assets/white-div-img-2.png'
import groupSixOne from './../assets/groupSix-1.png'
import groupSixTwo from './../assets/groupSix-2.png'
import groupSixThree from './../assets/groupSix-3.png'
import groupSevern from './../assets/groupSeven.png'
import whiteTwoOne from './../assets/whiteTwo-1.png'
import whiteTwoTwo from './../assets/whiteTwo-2.png'
import whiteTwoThree from './../assets/whiteTwo-3.png'
import groupEight from './../assets/groupEight.png'
import groupNine from './../assets/groupNine.png'
import groupTenOne from './../assets/groupTenOne.png'
import groupTenTwo from './../assets/groupTenTwo.png'
import groupTenThree from './../assets/groupTenThree.png'
import groupEleven from './../assets/groupEleven.png'
import frameOne from './../assets/frameOne.png'
import frameTwo from './../assets/frameTwo.png'
import styled from 'styled-components'

const Span = styled.span`
color: yellow;
`
const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
const WhiteDiv = styled.div`
    background-color: white;
    color:black;
    padding:50px 0px ;
`
const WhiteDivBox = styled.div`
    display: flex;
    justify-content: center;
    gap:10px;
`
const TextDiv = styled.div`
padding:40px 0px;
`
function LandingPage() {
    return (
        <MainContainer >
            <TextDiv >
                <p style={{ fontSize: "96px", fontWeight: "700", lineHeight: "96px" }}>It's time to trade,
                    <br />the <Span >future.</Span></p>
                <p style={{ fontSize: "24px", fontWeight: "400"}}>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
            </TextDiv>
            <div>
                <img src={IphoneGroupImg} alt='' />
            </div>
            <div style={{ margin: "60px 0px" }}>
                <img src={frameOne} alt='' />
            </div>
            <div>
                <div>
                    <img src={groupOneOne} alt='' />
                </div>
                <div>
                    <img src={groupOneTwo} alt='' />
                </div>
                <div>
                    <img src={groupOneThree} alt='' />
                </div>

            </div>
            <TextDiv>
                <p style={{ fontSize: "72px", fontWeight: "700" }}>Trade More. <Span >Pay Less.</Span></p>
                <p style={{ fontSize: "24px", fontWeight: "400" }}>Our Low Fees Supercharge Your Profits</p>
            </TextDiv>


            <div>
                <img src={groupThree} alt='' />
            </div>
            <TextDiv>
                <p style={{ fontSize: "72px", fontWeight: "700" }}>Explore the Markets</p>
                <p style={{ fontSize: "72px", fontWeight: "700", lineHeight: "72px" }}>like it is your <span style={{ color: "yellow" }}>Playground.</span></p>
                <p style={{ fontSize: "24px", fontWeight: "400", lineHeight: "72px" }}>Search for your favorite coins and stay ahead of the market</p>
            </TextDiv>
            <div>
                <img src={groupFour} alt='' />
            </div>
            <div style={{ marginBottom: "40px" }}>
                <button style={{ width: "268px", height: "48px", borderRadius: "8px", padding: "24px 48px 36px 48px", fontWeight: "700" }} className='group-four-btn'>EXPLORE MARKETS</button>
            </div>
            <TextDiv>
                <p style={{ fontSize: "72px", fontWeight: "700" }}><Span >Unlock</Span> New Frontiers.</p>
                <p style={{ fontSize: "24px", fontWeight: "400" }}>Are you a stock trader looking for new opportunities to make</p>
                <p style={{ fontSize: "24px", fontWeight: "400" }}> money? We got you covered!</p>
            </TextDiv>
            <div>
                <img src={frameTwo} alt='' />
            </div>
            <div>
                <img src={groupFive} alt='' />
            </div>
            <WhiteDiv className='white-div-1'>
                <TextDiv>
                    <p style={{ fontSize: "72px", fontWeight: "700", lineHeight: "72px" }}>Start Small. Earn Big.</p>
                    <p style={{ fontSize: "24px", fontWeight: "400" }}>Deposity a minimum of 1000 and get a Deposit bonus + </p>
                    <p style={{ fontSize: "24px", fontWeight: "400" }}>dedicagted relationship manager</p>
                </TextDiv>
                <WhiteDivBox >
                    <div><img src={whiteOneOne} alt='' /></div>
                    <div><img src={whiteOneTwo} alt='' /></div>
                </WhiteDivBox>
            </WhiteDiv>
            <TextDiv>
                <p style={{ fontSize: "72px", fontWeight: "700", lineHeight: "72px" }}>Derivates made simple</p>
                <p style={{ fontSize: "72px", fontWeight: "700", lineHeight: "72px" }}>in <Span > 3 Easy Steps</Span></p>
            </TextDiv>
            <div>
                <div>
                    <img src={groupSixOne} alt='' />
                </div>
                <div>
                    <img src={groupSixTwo} alt='' />
                </div>
                <div>
                    <img src={groupSixThree} alt='' />
                </div>
            </div>

            <div>
                <img src={groupSevern} alt='' />
            </div>
            <div className='white-div-2'>
                <TextDiv>
                    <p style={{ fontSize: "72px", fontWeight: "700" }}> Don’t take our word for it.</p>
                    <p style={{ fontSize: "24px", fontWeight: "400" }}>Hear it from our expert community of traders who have made </p>
                    <p style={{ fontSize: "24px", fontWeight: "400" }}>insane amounts in a short amount of time</p>
                </TextDiv>
                <WhiteDivBox>
                    <div>
                        <img src={whiteTwoOne} alt='' />
                    </div>
                    <div>
                        <img src={whiteTwoTwo} alt='' />
                    </div>
                    <div>
                        <img src={whiteTwoThree} alt='' />
                    </div>
                </WhiteDivBox>
            </div>
            <div>
                <img src={groupEight} alt='' />
            </div>
            <div>
                <img src={groupNine} alt='' />
            </div>
            <div>
                {/* <img src={} alt=''/> */}
            </div>
            <div>
                <img src={groupEleven} alt='' />
            </div>

        </MainContainer>
    )
}

export default LandingPage