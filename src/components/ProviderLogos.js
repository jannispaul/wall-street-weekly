import React from "react"
import styled from "styled-components"
import spotify from "../content/images/providers/spotify.svg"
import apple from "../content/images/providers/apple.svg"
import overcast from "../content/images/providers/overcast.svg"
import earliaudio from "../content/images/providers/earliaudio.png"
import soundcloud from "../content/images/providers/soundcloud.svg"
import deezer from "../content/images/providers/deezer.svg"
// import { device } from "../theme/breakpoints"
import RSSButton from "./RSSButton"

const StyledLogos = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-template-rows: 60px 60px 30px;
  grid-gap: 10px;
  justify-content: center;
  position: relative;

  & > a {
    background: white;
    border-radius: 5px;
    box-shadow: 0 1px 14px 10px rgba(174, 174, 174, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms transform ease;
    text-decoration: none;
    :hover {
      transform: scale(1.05);
      transition: 200ms transform ease;
    }
  }
`
const StyledImage = styled.img`
  width: 34px;
`
// const Banner = styled.div`
//   display: grid;
//   grid-template-columns: 100%;
//   grid-template-rows: 100%;
//   justify-content: center;
//   align-items: center;
//   & > p {
//     grid-column: 1;
//     grid-row: 1;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     margin: 0 auto;
//     z-index: 1;
//     font-size: 12px;
//     font-weight: 500;
//   }
//   & > img {
//     grid-column: 1;
//     grid-row: 1;
//     filter: grayscale(1);
//     opacity: 0.2;
//     margin: auto;
//     z-index: 0;
//   }
// `

const ProviderLogos = props => (
  <StyledLogos>
    <a
      href="https://podcasts.apple.com/de/podcast/id1485252076"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={apple} alt="apple logo" />
    </a>
    <a
      href="https://open.spotify.com/show/6Fe93skKJuVnpnAbRZpVGS"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={spotify} alt="spotify logo"></img>
    </a>
    <a
      href="https://www.deezer.com/de/show/630472"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={deezer} alt="deezer logo"></img>
    </a>
    <a
      href="https://earli.page.link/N5R3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledImage src={earliaudio} alt="earliaudio logo"></StyledImage>
    </a>
    <a
      href="https://soundcloud.com/user-652439363"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={soundcloud} alt="soundcloud logo"></img>
    </a>
    <a
      href="https://overcast.fm/itunes1485252076/the-americans"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={overcast} alt="overcast logo"></img>
    </a>
    <RSSButton></RSSButton>
  </StyledLogos>
)
export default ProviderLogos
