import React from "react"
import ContentLoader from "react-content-loader"

const ViewProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={450}
    viewBox="0 0 1200 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="16" rx="0" ry="0" width="148" height="28" /> 
    <rect x="3" y="360" rx="0" ry="0" width="590" height="119" /> 
    <rect x="184" y="99" rx="0" ry="0" width="220" height="16" /> 
    <rect x="228" y="138" rx="0" ry="0" width="134" height="106" /> 
    <rect x="264" y="251" rx="0" ry="0" width="66" height="13" /> 
    <rect x="215" y="274" rx="0" ry="0" width="174" height="31" />
  </ContentLoader>
)

export default ViewProfileLoader;