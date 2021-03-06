import {
  Component,
  HostBinding,
  Input,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { NavItem } from '../nav-item';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

// https://stackblitz.com/edit/dynamic-sidenav-multi-level-menu
@Component({
  selector: 'dom-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ])
  ]
})
export class MenuListItemComponent {
  @Input() item: NavItem;
  @Input() depth: number;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.item
    ? this.item.expanded
    : false;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.item.expanded = !this.item.expanded;
    }
  }
}
