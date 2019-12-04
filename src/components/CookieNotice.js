import React from "react"
import CookieConsent from "react-cookie-consent"
// import { Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
  & > div {
    display: flex;
    align-items: center !important;
  }
`

const CookieNotice = () => (
  <StyledContainer>
    <CookieConsent
      debug={false}
      location="bottom"
      buttonText="Verstanden"
      cookieName="TheAmericansCookieNoticeAccepted"
      style={{
        background: "#7000c0",
        color: "white",
        position: "relative",
        zIndex: "200",
        display: "flex",
      }}
      buttonStyle={{
        background: "white",
        color: "#7000c0",
        fontWeight: "600",
        fontSize: "18px",
        padding: "18px",
        border: "none",
        cursor: "pointer",
      }}
      expires={365}
    >
      Diese Website nutzt Cookies um Ihr Erlebnis zu verbessern.{" "}
      <a
        href="https://mediapioneer.com/datenschutz"
        style={{ color: "white" }}
        aria-label="Link zum Datenschutz"
      >
        Mehr erfahren
      </a>
    </CookieConsent>
  </StyledContainer>
)

export default CookieNotice
