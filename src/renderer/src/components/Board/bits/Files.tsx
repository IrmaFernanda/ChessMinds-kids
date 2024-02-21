import { getCharacter } from '@renderer/helper'

export const Files = ({ className, files }) => {
  return (
    <div className={className}>
      {files.map((file) => (
        <span key={file}>{getCharacter(file)}</span>
      ))}
    </div>
  )
}
