import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-portfoliocard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portfoliocard.component.html',
  styleUrl: './portfoliocard.component.css',
})
export class PortfoliocardComponent {
  isHover: boolean = false;

  constructor(private shared: SharedService) {}

  portfolioOn(): void {
    this.shared.setPortfolioOn(true);
  }
}
