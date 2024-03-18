import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

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

  constructor(private shared: SharedService) {}

  openPortfolio(): void {
    this.shared.setPortfolioOn(true);
  }

  openHireme(): void {
    this.shared.setHiremeOn(true);
  }
}
