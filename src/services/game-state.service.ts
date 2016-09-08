import { Injectable } from '@angular/core';
import { GameState }  from '../models/game-state.model';

@Injectable()
export class GameStateService {
  gameState:GameState;
  constructor() {
    this.gameState = new GameState();
  }

  getGameState(): Promise<GameState> {
    return Promise.resolve(this.gameState);
  }
}