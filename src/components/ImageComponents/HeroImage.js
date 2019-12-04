import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

// const StyledImage = styled(Img)`
//   height: 100%;
//   @media ${device.tablet} {
//     display: none;
//   }
// `
const StyledImage = styled(Img)`
  display: none;
  @media ${device.tablet} {
    position: absolute !important;
    bottom: 0;
    width: 70%;
    z-index: 0;
    right: 0;
  }
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.heroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "contain", objectPosition: "100% 100%" }}
          alt="Frau Chelsea Spieker schaut mit bestimmtem Blick in die Kamera"
        />
      )
    }}
  />
)
export default HeroImage
