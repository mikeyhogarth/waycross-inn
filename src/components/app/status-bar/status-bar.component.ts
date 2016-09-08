import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../../services/game-state.service';
import { GameState } from '../../../models/game-state.model';

const template = require('./status-bar.component.pug');

@Component({
  selector: 'wc-status-bar',
  styleUrls: ['./status-bar.component.scss'],
  template: template(),
})
export class StatusBarComponent implements OnInit {
  gold: number;

  constructor(private gameStateService:GameStateService) { }

  ngOnInit() { 
    this.gameStateService.getGameState().then(g =>
      this.gold = g.gold
    );
  }
}