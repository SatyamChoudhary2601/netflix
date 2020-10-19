import React from "react"
import ContentLoader from "react-content-loader"

const VideoLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1200 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="14" rx="0" ry="0" width="536" height="407" />
  </ContentLoader>
)

export default VideoLoader;