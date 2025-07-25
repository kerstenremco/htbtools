import { Machine } from "@/lib/machine";

function MachineElement(props: {
  machine: Machine;
  onMachineChange: () => void;
  onRootChange?: () => void;
}) {
  const { machine } = props;
  return (
    <div className="flex items-center gap-4 border-t border-slate-400 p-4 hover:cursor-pointer">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        className={machine.userOwned ? "stroke-green-500" : "stroke-slate-400"}
        fill="none"
        onClick={props.onMachineChange}
      >
        <path
          d="M5 22V14M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.8221 14.2945C18.4082 14.148 18.6861 13.4769 18.3753 12.9589L16.8147 10.3578C16.4732 9.78863 16.3024 9.50405 16.2619 9.19451C16.2451 9.06539 16.2451 8.93461 16.2619 8.80549C16.3024 8.49595 16.4732 8.21137 16.8147 7.64221L18.0932 5.51132C18.4278 4.9536 17.9211 4.26972 17.2901 4.42746C15.8013 4.79967 14.2331 4.69323 12.8082 4.12329L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 14V11M5 4V2M5 4V7"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        className={machine.rootOwned ? "stroke-green-500" : "stroke-slate-400"}
        onClick={props.onRootChange}
      >
        <path
          d="M13 21L17 3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 21L11 3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 9L4 9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 15L20 15"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div>
        <p className="text-slate-300 mb-1">{machine.name}</p>
        <p className="text-xs uppercase font-light text-slate-400">
          {machine.difficulty}
        </p>
      </div>
    </div>
  );
}
export default MachineElement;
