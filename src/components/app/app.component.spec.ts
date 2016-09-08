import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideRoutes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';

describe('App', () => {
  let fixture : ComponentFixture<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [AppComponent, StatusBarComponent, NavigationComponent, NotificationsComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [provideRoutes([])]
    });
    fixture = TestBed.createComponent(AppComponent);  
  });
  describe('#constructor', () => {
    it ('should work', () => {
      expect(fixture.componentInstance instanceof AppComponent).toBe(true);
    });
  });
});