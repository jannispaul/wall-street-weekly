import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EpisodeLink from "./EpisodeLink"
import styled from "styled-components"
import headlineBG from "../content/images/headline-bg-1.png"
import { device } from "../theme/breakpoints"

import Button from "./Button"

const StyledRecentEpisodes = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; */
  padding: 0 24px;
  position: relative;
`

const StyledHeadline = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 48px;
  & > h2 {
    color: #7000c0;
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
    top: 8px;
    @media ${device.mobileM} {
      display: block;
      width: 351px;
      top: 8px;
      max-width: 430px;
    }
    @media ${device.tablet} {
      width: 100%;
      width: 501px;
      max-width: 100%;
      top: 12px;
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
        <StyledHeadline>
          <h2>Recent Episodes</h2>
          <img src={headlineBG} alt="Airplanes flying away from headline" />
        </StyledHeadline>
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
        <Button to="/all-episodes/">All Episodes</Button>
        <br />
      </StyledRecentEpisodes>
    )}
  />
)
