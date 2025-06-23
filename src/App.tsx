import { useEffect, useState } from "react";
import MachineElement from "./components/machine";
import { Machine } from "./lib/machine1";
import { calculatePercentage } from "./lib/utils";
import { Progress } from "@/components/ui/progress";
import Ranking from "./Ranking";
import Challenges from "./Challenges";

function App() {
  const [data, setData] = useState<Machine[]>([]);
  const [activeChallengeOwns, setActiveChallengeOwns] = useState(1);

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.items.map((item: any) => new Machine(item.name, item.difficulty))
        )
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Callbacks
  const handleMachineCompletion = (machine: Machine, root: boolean) => {
    const newState = data.map((m) => {
      if (m == machine) {
        if (root) {
          m.rootOwned = !m.rootOwned;
        } else {
          m.userOwned = !m.userOwned;
        }
      }
      return m;
    });
    setData(newState);
  };

  // Computed
  const percentage = calculatePercentage(
    data.filter((m) => m.rootOwned).length,
    data.filter((m) => m.userOwned).length,
    6,
    activeChallengeOwns,
    166
  );

  return (
    <div className="w-4/5 mx-auto my-4">
      <div className="flex">
        <div className="p-4 flex-1">
          <Challenges
            activeChallengeOwns={activeChallengeOwns}
            setActiveChallengeOwns={setActiveChallengeOwns}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col items-center justify-center">
          <h2 className="text-slate-400 mb-1">Progress: {percentage}%</h2>
          <Progress value={percentage} />
        </div>
        <div className="p-4 flex-1">
          <Ranking percentage={percentage} />
        </div>
      </div>
      <div className="">
        {data.map((item) => (
          <MachineElement
            key={item.name}
            machine={item}
            onMachineChange={() => handleMachineCompletion(item, false)}
            onRootChange={() => handleMachineCompletion(item, true)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
