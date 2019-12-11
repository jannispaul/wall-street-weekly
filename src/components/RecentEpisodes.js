import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EpisodeLink from "./EpisodeLink"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import Button from "./Button"

const StyledRecentEpisodes = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; */
  padding: 0 24px;
  position: relative;

  & > h2 {
    text-align: center;
    margin-top: 50px;
    color: #030203;
    @media ${device.tablet} {
      margin-top: 100px;
    }
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query LatestEpisodesQuery {
        allContentfulPodcast(
          sort: { order: DESC, fields: createdAt }
          limit: 3
        ) {
          edges {
            node {
              podcastSlug
              title
              body {
                json
              }
              description {
                description
              }
              slug
              updatedAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
              image {
                sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledRecentEpisodes>
        <h2>Recent Episodes</h2>
        {/* <img src={headlineBG} alt="Airplanes flying away from headline" /> */}
        {/* <StyledHeadline>
        </StyledHeadline> */}
        {data.allContentfulPodcast.edges.map(({ node }) => (
          <EpisodeLink
            key={node.id}
            slug={node.slug}
            date={node.updatedAt}
            title={node.title}
            excerpt={node.description.description.substring(0, 105) + " ..."}
            image={node.image}
            podcastSlug={node.podcastSlug}
          ></EpisodeLink>
        ))}
        <br />
        <Button to="/all-episodes/">Alle Episoden</Button>
        <br />
      </StyledRecentEpisodes>
    )}
  />
)
