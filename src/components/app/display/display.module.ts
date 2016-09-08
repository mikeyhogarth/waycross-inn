import { NgModule } from '@angular/core';

import { DisplayComponent }   from './display.component';
import { TaproomComponent } from './taproom/taproom.component';
import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from './about/about.component';
import { routing } from '../app.routing';

@NgModule({
  imports: [routing],
  exports: [ DisplayComponent ],
  declarations: [DisplayComponent, TaproomComponent, AboutComponent, OverviewComponent],
  providers: []
})
export class DisplayModule {}