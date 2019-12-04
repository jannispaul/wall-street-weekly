import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import frameBG from "../content/images/frame-bg.png"
import frameBGRev from "../content/images/frame-bg-2.png"

const StyledFrame = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
  @supports not (pointer-events: none) {
    display: none;
  }
  & > div {
    background-size: contain;
    position: absolute;
  }
`
const Top = styled.div`
  background: url(${frameBG}) repeat-x;
  width: 100%;
  top: 0;
  height: 8px;
  @media ${device.tablet} {
    height: 16px;
  }
`
const Bottom = styled.div`
  background: url(${frameBGRev}) repeat-x;
  transform: rotate(180deg);
  width: 100%;
  height: 8px;
  bottom: 0%;
  @media ${device.tablet} {
    height: 16px;
    bottom: 0%;
  }
`
const Right = styled.div`
  background: url(${frameBG}) repeat-x;
  transform: rotate(90deg);
  width: 100vh;
  right: -50vh;
  top: 50vh;
  height: 8px;
  margin-right: 4px;
  @media ${device.tablet} {
    height: 16px;
    margin-right: 8px;
  }
`
const Left = styled.div`
  background: url(${frameBGRev}) repeat-x;
  transform: rotate(-90deg);
  width: 100vh;
  left: -50vh;
  bottom: 50%;
  margin-left: 4px;
  height: 8px;
  @media ${device.tablet} {
    margin-left: 8px;
    height: 16px;
  }
`

const Frame = props => (
  <StyledFrame>
    <Top></Top>
    <Right></Right>
    <Bottom></Bottom>
    <Left></Left>
  </StyledFrame>
)

export default Frame
