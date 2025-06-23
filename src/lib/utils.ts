import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculatePercentage(
  ActiveSystemOwns: number,
  ActiveUserOwns: number,
  activeMachines: number,
  ActiveChallengeOwns: number,
  activeChallenges: number
): number {
  return (
    ((ActiveSystemOwns + ActiveUserOwns / 2 + ActiveChallengeOwns / 10) /
      (activeMachines + activeMachines / 2 + activeChallenges / 10)) *
    100
  ).toFixed(2) as unknown as number;
}
