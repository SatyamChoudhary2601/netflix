import React from "react"
import ContentLoader from "react-content-loader"

const SubscriptionLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={1000}
    viewBox="0 0 1200 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="17" rx="0" ry="0" width="582" height="45" /> 
    <rect x="18" y="102" rx="0" ry="0" width="180" height="311" /> 
    <rect x="209" y="102" rx="0" ry="0" width="180" height="311" /> 
    <rect x="399" y="102" rx="0" ry="0" width="180" height="311" /> 
    <rect x="18" y="440" rx="0" ry="0" width="180" height="311" /> 
    <rect x="209" y="440" rx="0" ry="0" width="180" height="311" /> 
    <rect x="399" y="440" rx="0" ry="0" width="180" height="311" /> 
    <rect x="9" y="790" rx="0" ry="0" width="588" height="113" />
  </ContentLoader>
)

export default SubscriptionLoader;