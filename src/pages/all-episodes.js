import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import AllEpisodes from "../components/AllEpisodes"
import About from "../components/About"
import KeepInTouch from "../components/KeepInTouch"
import MPProducts from "../components/MPProducts"
import headlineBG from "../content/images/headline-bg-3.png"
import { device } from "../theme/breakpoints"

const StyledHeadline = styled.div`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 48px;

  & > h1 {
    color: #7000c0;
    z-index: 2;
    position: relative;
  }
  & img {
    display: none;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 3px;
    right: 0;
    top: 8px;
    user-drag: none;
    user-select: none;

    @media ${device.mobileL} {
      display: block;
      width: 347px;
      top: 3px;
      max-width: 430px;
    }
    @media ${device.laptop} {
      width: 100%;
      width: 433px;
      max-width: 100%;
      top: 12px;
    }
  }
`

const AllEpisodesPage = () => (
  <Layout logocolor="#69d9c2">
    <SEO title="Alle Episoden" />
    <StyledHeadline>
      <h1>All Episodes</h1>
      <img src={headlineBG} alt="Airplanes flying away from headline" />
    </StyledHeadline>
    <AllEpisodes></AllEpisodes>
    <About></About>
    <KeepInTouch></KeepInTouch>
    <MPProducts></MPProducts>
  </Layout>
)

export default AllEpisodesPage
