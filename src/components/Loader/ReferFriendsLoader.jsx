import React from "react"
import ContentLoader from "react-content-loader"

const ReferFriendsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1200 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="19" rx="0" ry="0" width="377" height="20" /> 
    <rect x="5" y="46" rx="0" ry="0" width="589" height="6" /> 
    <rect x="7" y="67" rx="0" ry="0" width="587" height="214" /> 
    <rect x="7" y="299" rx="0" ry="0" width="122" height="11" /> 
    <rect x="8" y="323" rx="0" ry="0" width="180" height="61" /> 
    <rect x="209" y="323" rx="0" ry="0" width="180" height="61" /> 
    <rect x="411" y="323" rx="0" ry="0" width="180" height="61" /> 
    <rect x="7" y="417" rx="0" ry="0" width="584" height="94" />
  </ContentLoader>
)

export default ReferFriendsLoader;