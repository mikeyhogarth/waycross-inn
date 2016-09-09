import { Component, Input } from '@angular/core';

const template = require('./resource-icon.component.pug');

const ResourceIcons = {
  gold: 'circle',
  peasant: 'user',
  soldier: 'user',
  noble: 'user',
  knight: 'user',
  merchant: 'user',
  renown: 'globe',
  storage: 'cubes',
  popularity: 'smile-o'
}

@Component({
  selector: 'wc-resource-icon',
  styleUrls: ['./resource-icon.component.scss'],
  template: template()
})
export class ResourceIconComponent {
  @Input() resourceType : string;  
  @Input() value : number;

  iconClass() {
    return `fa fa-fw fa-${ResourceIcons[this.resourceType]} ${this.resourceType}-resource`;
  }
}