import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  @Input() ContactIcons!: any[];

  contactIcons: any[] = [];
  isHovered: boolean = false;
  image: string = '';
  iconId: number = 0;

  constructor(private shared: SharedService) {}

  openHireme() {
    this.shared.setHiremeOn(true);
  }

  ngOnInit(): void {
    this.contactIcons = this.ContactIcons;
  }

  updateImage(): void {
    this.iconId += 1;
  }
}
