export class GameState {
    gold: number;
    renown: number;
    populace: Object;

    constructor() {
      // Initial Values
      this.gold      = 100;
      this.renown    = 0;
      this.populace  = {
        peasants: 1,
        merchants: 2,
        soldiers: 1,
        knights: 0,
        nobles: 0
      }; 
    }
}