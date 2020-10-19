import React from "react"
import ContentLoader from "react-content-loader"

const DeleteAccountLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={500}
    viewBox="0 0 1200 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="17" rx="0" ry="0" width="582" height="45" /> 
    <rect x="160" y="98" rx="0" ry="0" width="345" height="266" /> 
    <rect x="9" y="404" rx="0" ry="0" width="582" height="86" />
  </ContentLoader>
)

export default DeleteAccountLoader;