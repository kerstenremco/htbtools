import { ranks } from "@/lib/ranks";

export default function Ranking(props: { percentage: number }) {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {ranks.map((rank) => (
        <p
          className={
            props.percentage >= rank.score ? "text-green-500" : "text-slate-400"
          }
        >
          {rank.name} - {rank.score}%
        </p>
      ))}
    </div>
  );
}
