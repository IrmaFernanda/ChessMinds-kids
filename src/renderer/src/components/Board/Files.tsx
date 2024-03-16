type FilesProps = { files: string[] }

export const Files = ({ files }: FilesProps) => {
  return (
    <div className="flex col-span-2 items-center justify-around h-.25-100px">
      {files.map((file) => (
        <span key={`rank${file}`}>{file}</span>
      ))}
    </div>
  )
}
