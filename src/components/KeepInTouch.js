import React from "react"
import styled from "styled-components"

import ShowCaseImage from "./ImageComponents/ShowCaseImage"
import ProviderLogos from "./ProviderLogos"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  position: relative;
  display: block;
  width: 100%;
  background: #fff;
  padding-top: 16px;
  & > div {
    max-width: 1256px;
    margin: auto;
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row: auto;
      height: 750px;
      overflow: visible;
      align-items: center;
    }
  }
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 24px;
  /* max-width: 560px; */
  a {
    color: #eb003f;
  }
  @media ${device.tablet} {
    grid-column: 3/5;
    grid-row: 1;
  }
`

const KeepInTouch = props => (
  <StyledSection>
    <div>
      <ShowCaseImage></ShowCaseImage>
      <ContentContainer>
        <h2>Keep in touch</h2>
        <p>
          Free, no ads and a new episode every Wednesday: Listen to The
          Americans on your favorite streaming service. And please feel free to
          contact us with your feedback at:{" "}
          <a href="mailto:americans@mediapioneer.com">
            americans@mediapioneer.com
          </a>
        </p>

        <ProviderLogos></ProviderLogos>
      </ContentContainer>
    </div>
  </StyledSection>
)

export default KeepInTouch
