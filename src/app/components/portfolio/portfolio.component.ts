import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  isHover: boolean = false;

  portfolio: any[] = [
    {
      id: 1,
      name: 'Doctor Care',
      img: 'assets/portfolio/doctor-care.png',
      technologies: ['html', 'css', 'JavaScript'],
      text: 'Aplicação web de um serviço de saúde, com apresentação da empresa e seus serviços e método de contato.',
      href: 'https://github.com/guilhermeCLeichsenring/doctorcare',
      mainColor: 'mainColor1',
      bgMainColor: 'bgMainColor1',
      bgCard: 'bgCard1',
      isHover: false,
    },
    {
      id: 2,
      name: 'Boeira Studio',
      img: 'assets/portfolio/boeira-studio.png',
      technologies: ['html', 'css', 'JavaScript'],
      text: 'Esse site para um studio de beleza e é composto por suas páginas: Home (studio), procedimentos, sobre, espaço, equipe e outra página de trabalhe conosco.',
      href: '',
      mainColor: 'mainColor2',
      bgMainColor: 'bgMainColor2',
      bgCard: 'bgCard2',
      isHover: false,
    },
    {
      id: 3,
      name: 'Generic Store',
      img: 'assets/portfolio/generic-store.png',
      technologies: ['Angular', 'API', 'html', 'css', 'JavaScript'],
      text: 'Este é um projeto web em Angular com propósitos educacionais, onde se pratica o uso do Angular HTTP Client e seus princípios para criar um site de comércio eletrônico genérico. Foi utilizada uma API disponível online para a função de obtenção (Get) dos produtos.',
      href: 'https://github.com/guilhermeCLeichsenring/STORE-APP',
      mainColor: 'mainColor3',
      bgMainColor: 'bgMainColor3',
      bgCard: 'bgCard3',
      isHover: false,
    },
  ];

  constructor(private shared: SharedService) {
    this.shared.getPortfolioOn().subscribe((result: boolean) => {
      this.openPortfolio(result);
    });
  }

  // Show and Close Portfolio

  ifBg: boolean = false;
  hideModal: boolean = true;
  hideBg: boolean = true;

  openPortfolio(portfolioOn: boolean) {
    if (portfolioOn == true) {
      this.ifBg = true;
      setTimeout(() => {
        this.hideBg = false;
      }, 400);

      setTimeout(() => {
        this.hideModal = false;
      }, 800);
    }
  }

  closePortfolio() {
    this.hideModal = true;

    setTimeout(() => {
      this.hideBg = true;
    }, 800);

    setTimeout(() => {
      this.ifBg = false;
    }, 1000);
  }
}
