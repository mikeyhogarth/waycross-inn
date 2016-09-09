import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { CommonModule } from './common/common.module';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { routing } from './app.routing';
import { GameStateService } from '../../services/game-state.service';

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

export const AppModuleConfig = {
  imports: [
    DisplayModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    TooltipModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    StatusBarComponent,
    NavigationComponent,
    NotificationsComponent
  ],
  providers: [ GameStateService ],
  bootstrap: [ AppComponent ]
}

@NgModule(AppModuleConfig)
export class AppModule {
}