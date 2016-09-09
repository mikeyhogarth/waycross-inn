import { NgModule } from '@angular/core';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ResourceIconComponent }   from './resource-icon/resource-icon.component';

@NgModule({
  imports: [ TooltipModule ],
  exports: [ ResourceIconComponent ],
  declarations: [ ResourceIconComponent ],
  providers: []
})
export class CommonModule {}