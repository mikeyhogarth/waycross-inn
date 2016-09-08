import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    DisplayModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    StatusBarComponent,
    NavigationComponent,
    NotificationsComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}