import React from "react"
import ContentLoader from "react-content-loader"

const HomeLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={900}
    viewBox="0 0 1200 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="20" rx="0" ry="0" width="575" height="55" /> 
    <rect x="9" y="80" rx="0" ry="0" width="575" height="155" /> 
    <rect x="9" y="260" rx="0" ry="0" width="84" height="9" /> 
    <rect x="9" y="285" rx="0" ry="0" width="130" height="87" /> 
    <rect x="157" y="285" rx="0" ry="0" width="130" height="87" /> 
    <rect x="304" y="285" rx="0" ry="0" width="130" height="87" /> 
    <rect x="453" y="285" rx="0" ry="0" width="130" height="87" /> 
    <rect x="9" y="392" rx="0" ry="0" width="84" height="9" /> 
    <rect x="9" y="417" rx="0" ry="0" width="130" height="87" /> 
    <rect x="157" y="417" rx="0" ry="0" width="130" height="87" /> 
    <rect x="304" y="417" rx="0" ry="0" width="130" height="87" /> 
    <rect x="453" y="417" rx="0" ry="0" width="130" height="87" /> 
    <rect x="10" y="524" rx="0" ry="0" width="84" height="9" /> 
    <rect x="10" y="549" rx="0" ry="0" width="130" height="87" /> 
    <rect x="158" y="549" rx="0" ry="0" width="130" height="87" /> 
    <rect x="305" y="549" rx="0" ry="0" width="130" height="87" /> 
    <rect x="454" y="549" rx="0" ry="0" width="130" height="87" /> 
    <rect x="10" y="656" rx="0" ry="0" width="84" height="9" /> 
    <rect x="10" y="681" rx="0" ry="0" width="130" height="87" /> 
    <rect x="158" y="681" rx="0" ry="0" width="130" height="87" /> 
    <rect x="305" y="681" rx="0" ry="0" width="130" height="87" /> 
    <rect x="454" y="681" rx="0" ry="0" width="130" height="87" /> 
    <rect x="9" y="813" rx="0" ry="0" width="575" height="65" />
  </ContentLoader>
)

export default HomeLoader;