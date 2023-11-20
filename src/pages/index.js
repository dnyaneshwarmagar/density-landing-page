import * as React from "react"
import Navbar from "../components/Navbar"
import styled from "styled-components"
import './index.css'
import LandingPage from "./LandingPage"
import Footer from "../components/Footer"
const Wrapper = styled.body`
margin: 0;
`

export default function Home() {
  return <div>
    <Navbar/>
    <LandingPage/>
    <Footer/>
  </div>
}
