import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImage = styled(Img)`
  margin-bottom: 16px;
  box-shadow: 0 1px 11px 8px rgba(174, 174, 174, 0.12);
`

const UeberstundePodcastImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "products/ueberstunde-podcast.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.file.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          alt="Moderatoren-Team über dem Überstunde Schriftzug und dem Sonnenunterganger in Berlin"
        />
      )
    }}
  />
)
export default UeberstundePodcastImage
