export class Machine {
  name: string;
  difficulty: string;
  userOwned: boolean = false;
  rootOwned: boolean = false;
  constructor(name: string, difficulty: string) {
    this.name = name;
    this.difficulty = difficulty;
  }
}
