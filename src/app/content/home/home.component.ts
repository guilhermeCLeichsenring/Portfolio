import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, RouterOutlet],
})
export class HomeComponent {
  top: number = 0;

  @Input() LoadHome!: boolean;
  hideHome: boolean = true;
}
