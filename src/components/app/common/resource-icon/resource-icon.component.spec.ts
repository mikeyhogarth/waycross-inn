import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ResourceIconComponent } from './resource-icon.component';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

describe('ResourceIconComponent', () => {
  let fixture : ComponentFixture<ResourceIconComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [TooltipModule],
      declarations: [ResourceIconComponent]
    });
    fixture = TestBed.createComponent(ResourceIconComponent);  
  });
  describe('#constructor', () => {
    it ('should work', () => {
      expect(fixture.componentInstance instanceof ResourceIconComponent).toBe(true);
    });
  });
});