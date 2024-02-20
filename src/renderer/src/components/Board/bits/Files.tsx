import React from 'react'

export const Files = ({ className, files }) => {
  return (
    <div className={className}>
      {files.map((file) => (
        <span key={file}>{file}</span>
      ))}
    </div>
  )
}
