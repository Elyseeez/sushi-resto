import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader 
    className="load"
    speed={2}
    width={240}
    height={418}
    viewBox="0 0 240 418"
    backgroundColor="#f3f3f3"
    foregroundColor="#e1d5d5"
  >
    <circle cx="576" cy="529" r="15" /> 
    <rect x="508" y="534" rx="2" ry="2" width="140" height="10" /> 
    <rect x="519" y="527" rx="2" ry="2" width="140" height="10" /> 
    <rect x="444" y="459" rx="2" ry="2" width="400" height="164" /> 
    <rect x="7" y="17" rx="0" ry="0" width="160" height="241" /> 
    <rect x="347" y="39" rx="0" ry="0" width="0" height="2" /> 
    <rect x="23" y="275" rx="0" ry="0" width="132" height="26" /> 
    <rect x="50" y="314" rx="0" ry="0" width="77" height="23" /> 
    <rect x="14" y="351" rx="19" ry="19" width="150" height="40" />
  </ContentLoader>
  );
}

export default LoadingBlock;