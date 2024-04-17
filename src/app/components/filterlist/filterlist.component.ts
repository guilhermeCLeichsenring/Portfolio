import {
  Component,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-filterlist',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './filterlist.component.html',
  styleUrl: './filterlist.component.css',
})
export class FilterlistComponent {
  filterName: string = 'all';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.filterName);
  }

  selectFilter(name: string) {
    this.filterName = name;

    this.sendMessage();
    this.changeState(name);
  }

  changeState(name: string): void {
    this.filterlist.forEach((element) => {
      if (name === element.name) {
        element.state = 'selected';
      } else {
        element.state = 'default';
      }
    });
  }

  filterlist: any[] = [
    {
      id: 0,
      name: 'all',
      state: `selected`,
    },
    {
      id: 1,
      name: 'design',
      state: `default`,
    },
    {
      id: 2,
      name: 'front-end',
      state: `default`,
    },
    {
      id: 3,
      name: 'back-end',
      state: `default`,
    },
    // {
    //   id: 4,
    //   name: 'full-stack',
    //   image: `assets/element/filter/full-stack/full-stack=${this.states[4]}.png`,
    // },
  ];
}
