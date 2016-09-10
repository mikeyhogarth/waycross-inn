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

  describe('#icon', () => {
    it('sorts out the icon class for the resource', () => {
      fixture.componentInstance.resourceType = 'gold';
      expect(fixture.componentInstance.iconClass()).toEqual('fa fa-fw fa-circle gold-resource');
    });
  });
});