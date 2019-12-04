import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import MPPresents from "../content/images/mp-presents.svg"

const PresentedBy = styled.div`
  height: 55px;
  background: #2c2c2c;
  /* padding-top: 25px; */
  display: flex;
  justify-content: center;
  align-content: center;
`
const StyledImage = styled.img`
  margin-top: 5px;
  max-width: 100%;
  width: 200px;
  @media ${device.tablet} {
    margin-top: 10px;
  }
`

const MyStatelessComponent = props => (
  <PresentedBy>
    <StyledImage src={MPPresents} alt="Mediapioneer presents Schriftzug" />
  </PresentedBy>
)

export default MyStatelessComponent
