type FilesProps = { files: string[] }

export const Files = ({ files }: FilesProps) => {
  return (
    <div className="flex justify-around w-full">
      {files.map((file) => (
        <span className="flex justify-center" key={`rank${file}`}>
          {file}
        </span>
      ))}
    </div>
  )
}
