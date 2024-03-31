import { ComponentProps, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

type FilesProps = { files: string[] } & ComponentProps<'div'>

export const Files = ({ files, className, ...props }: FilesProps) => {
  return (
    <div className={twMerge(className, 'flex justify-around w-full')} {...props}>
      {files.map((file) => (
        <span className="flex justify-center" key={`rank${file}`}>
          {file}
        </span>
      ))}
    </div>
  )
}
