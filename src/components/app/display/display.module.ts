import { NgModule } from '@angular/core';

import { DisplayComponent }   from './display.component';
import { TaproomComponent } from './taproom/taproom.component';
import { AboutComponent } from './about/about.component';
import { routing } from '../app.routing';

@NgModule({
  imports: [routing],
  exports: [ DisplayComponent ],
  declarations: [DisplayComponent, TaproomComponent, AboutComponent],
  providers: []
})
export class DisplayModule {}