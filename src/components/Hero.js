import React from "react"
import styled from "styled-components"

import HeroImage from "./ImageComponents/HeroImage"
import HeroImageMobile from "./ImageComponents/HeroImageMobile"
import ProviderLogos from "./ProviderLogos"
import { device } from "../theme/breakpoints"
import { Link } from "gatsby"
import arrowDown from "../content/images/arrow-down.svg"
import background from "../content/images/bg.jpg"

const StyledHero = styled.section`
  position: relative;
  display: block;
  width: 100%;
  background: url(${background});
  & > div {
    max-width: 1256px;
    margin: auto;
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row: auto;
      height: 750px;
      overflow: hidden;
      align-items: center;
    }
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 24px;
  max-width: 560px;
  @media ${device.tablet} {
    grid-column: 1/3;
    grid-row: 1;
  }
`

const MoreLink = styled(Link)`
  display: flex;
  text-decoration: none;
  line-height: 1.3;
  align-items: center;
  & > img {
    margin-right: 16px;
  }
`

const Hero = props => (
  <StyledHero>
    <div>
      <HeroImageMobile></HeroImageMobile>
      <HeroContent>
        <h1>The Americans</h1>
        <p>
          This podcast is about today’s America. It takes a closer look at
          politics and society, and has a special focus on people and their
          stories – stories that give you an up-close, personal and
          differentiated look at America.
        </p>

        <ProviderLogos></ProviderLogos>
        <MoreLink to="#episodes">
          <img src={arrowDown} alt="Pfeil nach unten" />
          Listen
          <br />
          now
        </MoreLink>
      </HeroContent>
    </div>
    <HeroImage></HeroImage>
  </StyledHero>
)

export default Hero
