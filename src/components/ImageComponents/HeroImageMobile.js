import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  height: 100%;
  @media ${device.tablet} {
    display: none;
  }
`

const mobileHeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        mobileHeroImage: file(relativePath: { eq: "hero-mobile.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.mobileHeroImage.childImageSharp
      return <StyledImage fluid={image.fluid} />
    }}
  />
)
export default mobileHeroImage
