type RanksProps = { ranks: number[] }

export const Ranks = ({ ranks }: RanksProps) => {
  return (
    <div className="flex flex-col items-center justify-around">
      {ranks.map((rank) => (
        <span key={`rank${rank}`}>{rank}</span>
      ))}
    </div>
  )
}
