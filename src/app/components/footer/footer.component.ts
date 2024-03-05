import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  @Input() ContactIcons!: any[];

  contactIcons: any[] = [];

  ngOnInit(): any {
    this.contactIcons = this.ContactIcons;
  }
}
