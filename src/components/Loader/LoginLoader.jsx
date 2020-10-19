import React from "react"
import ContentLoader from "react-content-loader"

const LoginLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1200 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="16" rx="0" ry="0" width="148" height="28" /> 
    <rect x="176" y="93" rx="0" ry="0" width="280" height="306" /> 
    <rect x="5" y="446" rx="0" ry="0" width="590" height="119" />
  </ContentLoader>
)

export default LoginLoader;