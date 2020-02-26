import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import MBPodcastImage from "./ImageComponents/MBPodcastImage"
import UeberstundePodcastImage from "./ImageComponents/UeberstundePodcastImage"
import TheAmericansPodcastImage from "./ImageComponents/TheAmericansPodcastImage"
import BeyondTheObviousPodcastImage from "./ImageComponents/BeyondTheObviousPodcastImage"
import TechBriefingPodcastImage from "./ImageComponents/TechBriefingPodcastImage"

import mpLogo from "../content/images/MP-logo.svg"

const StyledSection = styled.section`
  background: #f7f2fb;
  width: 100%;
  text-align: center;
  padding: 40px 24px;

  & > div {
    max-width: 1256px;
    margin: auto;
  }
  @media ${device.tablet} {
    padding: 80px 24px;
  }
`

const StyledLogo = styled.img`
  max-width: 200px;
  @media ${device.tablet} {
    max-width: 300px;
  }
`
const ProductContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  margin-top: 32px;
  grid-gap: 12px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    /* grid-template-columns: repeat(4, minmax(192px, 1fr)); */
    margin-top: 64px;
  }
  a {
    text-decoration: none;
    color: #2c2c2c;
    font-size: 14px;
    letter-spacing: 0.17px;
    line-height: 20px;
    margin-bottom: 40px;
    max-width: 240px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media ${device.laptop} {
      font-size: 18px;
      letter-spacing: 0.27px;
      line-height: 30px;
    }
    & div {
      transform: scale(1);
      transition: 200ms transform ease;
    }
    :hover {
      & div {
        transform: scale(1.03);
        transition: 200ms transform ease;
      }
    }
  }
`
const PreHeadline = styled.p`
  font-family: Oswald, "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif;
  font-size: 20px;
  color: #db003a;
  text-align: center;
`

const MPProducts = props => (
  <StyledSection>
    <div>
      <PreHeadline>Weitere Produktionen von</PreHeadline>
      <StyledLogo src={mpLogo} alt="Mediapioneer-Logo" />
      <ProductContainer>
        <a
          href="https://www.gaborsteingart.com/der-podcast/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MBPodcastImage></MBPodcastImage>
          <p>Steingarts Morning Briefing Podcast</p>
        </a>
        <a
          href="https://the-americans.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TheAmericansPodcastImage></TheAmericansPodcastImage>
          <p>The Americans – mit Chelsea Spieker</p>
        </a>
        <a
          href="https://überstunde.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UeberstundePodcastImage></UeberstundePodcastImage>
          <p>Überstunde – mit Marina Weisband und Michael Bröcker</p>
        </a>
        <a
          href="https://mediapioneer.com/techbriefing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TechBriefingPodcastImage></TechBriefingPodcastImage>
          <p>Tech Briefing – mit Daniel Fiene & Christian Miele</p>
        </a>
        <a
          href="https://think-beyondtheobvious.com/stelters-podcasts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BeyondTheObviousPodcastImage></BeyondTheObviousPodcastImage>
          <p>Beyond The Bbvious – mit Dr. Daniel Stelter</p>
        </a>
        {/*<a
          href="https://www.gaborsteingart.com/morning-briefing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MBNewsletterImage></MBNewsletterImage>
          <p>Steingarts Morning Breifing Newsletter</p>
        </a>
         <a
          href="https://mediapioneer.com/blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PioneerBlogImage></PioneerBlogImage>
          <p>Pioneer Blog – von Michael Bröcker</p>
        </a>
        <a
          href="https://mediapioneer.com/redaktionsschiff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PioneerOneImage></PioneerOneImage>
          <p>Pioneer One – das Redaktionsschiff</p>
        </a> */}
      </ProductContainer>
    </div>
  </StyledSection>
)

export default MPProducts
