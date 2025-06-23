export default function Challenges(props: {
  activeChallengeOwns: number;
  setActiveChallengeOwns: (value: number) => void;
}) {
  function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    const n = Number(e.target.value);
    props.setActiveChallengeOwns(n > 166 ? 166 : n < 0 ? 0 : n);
  }
  function clickHandle(plus: boolean) {
    const n = plus
      ? props.activeChallengeOwns + 1
      : props.activeChallengeOwns - 1;
    props.setActiveChallengeOwns(n > 166 ? 166 : n < 0 ? 0 : n);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-slate-400 mb-1">Challenge owns</p>
      <div className="relative">
        <button
          className="absolute h-8 w-8 right-10 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
          type="button"
          onClick={() => clickHandle(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFF"
            className="w-8 h-8"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <input
          type="number"
          className="w-full pl-3 h-10 pr-3 py-2 bg-transparent text-slate-400 text-sm border border-slate-200"
          min="0"
          max="166"
          value={props.activeChallengeOwns}
          onChange={changeHandle}
        />
        <button
          className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
          type="button"
          onClick={() => clickHandle(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFF"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <p className="mt-2 text-xs text-slate-400">
          from 166 active challenges owned
        </p>
      </div>
    </div>
  );
}
