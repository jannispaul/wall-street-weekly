import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"
import headlineBG from "../content/images/headline-bg-4.png"

const StyledAbout = styled.section`
  background: #fff2f5;
  width: 100%;
  padding: 48px 24px;
  text-align: center;

  & > div {
    max-width: 740px;
    margin: auto;
  }
  @media ${device.tablet} {
    padding: 80px 0;
  }
`

const SocialContainer = styled.div`
  font-family: AvenirNextCondensed-Bold, "Open Sans", -apple-system,
    BlinkMacSystemFont, Arial, sans-serif;
  font-size: 21.6px;
  color: #ff0045;
  letter-spacing: 0.34px;
  text-align: center;
  margin-top: 16px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const StyledIcon = styled.div`
  display: inline-block;
  margin-left: 16px;
  @media ${device.mobileM} {
    margin-left: 24px;
  }
  & > svg {
    fill: #ff0045;
    width: 24px;
  }
`

const StyledHeadline = styled.div`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;

  & > h2 {
    color: #ff0045;
    margin-bottom: 16px;
  }
  & img {
    display: none;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    user-drag: none;
    user-select: none;
    left: 0;
    right: 8px;
    @media ${device.mobileM} {
      display: block;
      width: 232px;
      top: 34px;
      max-width: 430px;
    }
    @media ${device.tablet} {
      width: 100%;
      width: 290px;
      max-width: 100%;
      top: 50px;
    }
  }
`

const About = props => (
  <StyledAbout>
    <div>
      <StyledHeadline>
        <h2>About Chelsea</h2>
        <img src={headlineBG} alt="Airplanes flying away from headline" />
      </StyledHeadline>
      <p>
        As an American living in Germany for over a decade, Chelsea Spieker has
        a unique view on her home country: one that gives you an inside and an
        outside perspective on what moves people in the United States.
      </p>
      <SocialContainer>
        Follow:
        <a
          href="https://business.facebook.com/the.americans.podcast"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The americans podcast on facebook"
        >
          <StyledIcon>
            <Icon icon={ICONS.FACEBOOK} />
          </StyledIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/chelsea-spieker-2859b016/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chelsea Spieker on linkedIn"
        >
          <StyledIcon>
            <Icon icon={ICONS.LINKEDIN} />
          </StyledIcon>
        </a>
        <a
          href="https://www.instagram.com/chelsea.spieker"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chelsea Spieker on instagram"
        >
          <StyledIcon>
            <Icon icon={ICONS.INSTAGRAM} />
          </StyledIcon>
        </a>
        <a
          href="https://twitter.com/ChelseaSpieker"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chelsea Spieker on twitter"
        >
          <StyledIcon>
            <Icon icon={ICONS.TWITTER} />
          </StyledIcon>
        </a>
      </SocialContainer>
    </div>
  </StyledAbout>
)

export default About
