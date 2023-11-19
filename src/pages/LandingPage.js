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


function LandingPage() {
    return (
        <div className='landing-page-container'>
            <div >
                <p>It's time to trade,</p>
                <p>the <span>future.</span></p>
                <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
            </div>
            <div>
                <img src={IphoneGroupImg} alt='' />
            </div>
            <div>
                pending design structure
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
            <div>
                <p>Trade MOre. Pay Less.</p>
                <p>Our Low Fees Supercharge Your Profits</p>
            </div>


            <div>
                <img src={groupThree} alt='' />
            </div>
            <div>
                <p>Explore the Markets</p>
                <p>like it is your Playground.</p>
                <p>Search for your favorite coins and stay ahead of the market</p>
            </div>
            <div>
                <img src={groupFour} alt='' />
            </div>
            <div>
                <button className='group-four-btn'>EXPLORE MARKETS</button>
            </div>
            <div>
                <p>Unlock New Frontiers.</p>
                <p>Are you a stock trader looking for new opportunities to make</p>
                <p> money? We got you covered!</p>
            </div>
            <div>
                pending
            </div>
            <div>
                <img src={groupFive} alt='' />
            </div>
            <div className='white-div-1'>
                <div>
                    <p>Start Small. Earn Big.</p>
                    <p>Deposity a minimum of 1000 and get a Deposit bonus + </p>
                    <p>dedicagted relationship manager</p>
                </div>
                <div className='white-div-box2'>
                    <div><img src={whiteOneOne} alt='' /></div>
                    <div><img src={whiteOneTwo} alt='' /></div>
                </div>
            </div>
            <div>
                <p>Derivates made simple</p>
                <p>in 3 Easy Steps</p>
            </div>
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
            <div>Backed by the Best.</div>
            <div>
                <img src={groupSevern} alt='' />
            </div>
            <div className='white-div-2'>
                <div>
                    <p>Don’t take our word for it.</p>
                    <p>Hear it from our expert community of traders who have made </p>
                    <p>insane amounts in a short amount of time</p>
                </div>
                <div className='white-div-2-box-2'>
                    <div>
                        <img src={whiteTwoOne} alt='' />
                    </div>
                    <div>
                        <img src={whiteTwoTwo} alt='' />
                    </div>
                    <div>
                        <img src={whiteTwoThree} alt='' />
                    </div>
                </div>
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
            
        </div>
    )
}

export default LandingPage