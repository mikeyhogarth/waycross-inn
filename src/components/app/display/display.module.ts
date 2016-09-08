import { NgModule } from '@angular/core';

import { DisplayComponent }   from './display.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from '../app.routing';

@NgModule({
  imports: [routing],
  exports: [ DisplayComponent ],
  declarations: [DisplayComponent, HomeComponent, AboutComponent],
  providers: []
})
export class DisplayModule {}