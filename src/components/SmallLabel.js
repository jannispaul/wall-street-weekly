import React from "react"
import styled from "styled-components"

const StyledSmall = styled.small`
  color: ${props => props.color || "#e6270a"};
  margin-bottom: 8px;
  font-family: "AmericanTypewriter", "Courier New", serif;
  color: #575757;
  letter-spacing: 1.33px;
`

const SmallLable = props => (
  <StyledSmall color={props.color}>{props.children}</StyledSmall>
)

export default SmallLable
