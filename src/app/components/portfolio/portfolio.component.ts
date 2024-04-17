import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { WorkComponent } from '../work/work.component';
import { FilterlistComponent } from '../filterlist/filterlist.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [CommonModule, RouterOutlet, WorkComponent, FilterlistComponent],
})
export class PortfolioComponent {
  isHover: boolean = false;
  workActive: any = null;
  isWorkActive: boolean = false;

  portfolioDefault: any[] = [
    {
      id: 1,
      name: 'Car Service',
      img: 'assets/portfolio/car-service/car-service.png',
      technologies: ['Figma'],
      text: 'Design web de um serviço de mecânica minimalista, mas que entrega identidade e proporciona uma ótima experiência ao usuário. Apresenta de forma efetiva a empresa, o agendamento, seus serviços e, o mais importante, como entrar em contato e se tornar um cliente.',
      type: 'design',
      mainColor: 'mainColor-carService',
      bgMainColor: 'bgMainColor-carService',
      bgCard: 'bgCard-carService',
      isHover: false,
    },
    {
      id: 2,
      name: 'General Store',
      img: 'assets/portfolio/general-store/general-store.png',
      technologies: ['Figma'],
      text: 'O protótipo mobile de e-commerce será um exemplo das melhores práticas de UI/UX, garantindo uma experiência fluida e intuitiva para os usuários. Com navegação simplificada, checkout fácil e compromisso com acessibilidade, é um modelo de design para qualquer e-commerce, incentivando e engajando os usuários em suas compras.',
      type: 'design',
      mainColor: 'mainColor-generalStore',
      bgMainColor: 'bgMainColor-generalStore',
      bgCard: 'bgCard-generalStore',
      isHover: false,
    },
    {
      id: 3,
      name: 'Doctor Care',
      img: 'assets/portfolio/doctor-care/doctor-care.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      text: 'Aplicação web de um serviço de saúde, do tipo landpage, com apresentação da empresa e seus serviços e método de contato.',
      type: 'front-end',
      mainColor: 'mainColor-doctorCare',
      bgMainColor: 'bgMainColor-doctorCare',
      bgCard: 'bgCard-doctorCare',
      isHover: false,
    },
    {
      id: 4,
      name: 'Boeira Studio',
      img: 'assets/portfolio/boeira-studio/boeira-studio.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      text: 'Esse site para um studio de beleza e é composto por suas páginas: Home (studio), procedimentos, sobre, espaço, equipe e outra página de trabalhe conosco.',
      type: 'front-end',
      mainColor: 'mainColor-boeiraStudio',
      bgMainColor: 'bgMainColor-boeiraStudio',
      bgCard: 'bgCard-boeiraStudio',
      isHover: false,
    },
    {
      id: 5,
      name: 'Generic Store',
      img: 'assets/portfolio/generic-store/generic-store.png',
      technologies: ['Angular', 'API', 'HTML5', 'CSS3', 'JavaScript'],
      text: 'Este é um projeto web em Angular com propósitos educacionais, onde se pratica o uso do Angular HTTP Client e seus princípios para criar um site de comércio eletrônico genérico. Foi utilizada uma API disponível online para a obtenção (GET) dos produtos.',
      type: 'front-end',
      mainColor: 'mainColor-genericStore',
      bgMainColor: 'bgMainColor-genericStore',
      bgCard: 'bgCard-genericStore',
      isHover: false,
    },
    {
      id: 6,
      name: 'API Fintech',
      img: 'assets/portfolio/fintech/fintech.png',
      technologies: ['API', '.NET', 'C#', 'Oracle- SQL Developer'],
      text: 'Aplicação web que realiza operações CRUD por meio da comunicação com uma API REST de um serviço de registro financeiro. Esta aplicação é capaz de contabilizar transações, suas categorias, bancos relacionados a elas e os usuários associados.',
      type: 'back-end',
      mainColor: 'mainColor-fintech',
      bgMainColor: 'bgMainColor-fintech',
      bgCard: 'bgCard-fintech',
      isHover: false,
    },
  ];

  constructor(private shared: SharedService) {
    this.shared.getPortfolioOn().subscribe((result: boolean) => {
      this.openPortfolio(result);
    });
  }

  portfolio: any[] = this.portfolioDefault;

  // portfolio: any[] = this.portfolioDefault.filter((i) => i.type == 'back-end');

  //Filter portfolio

  getFilter($event: any): void {
    console.log($event);
    if ($event === 'all' || $event === null) {
      this.portfolio = this.portfolioDefault;
    } else {
      this.portfolio = this.portfolioDefault;
      this.portfolio = this.portfolio.filter((i) => i.type == $event);
    }
  }

  // Show and close work

  selectWork(work: any): void {
    if (this.workActive === null && this.isWorkActive === false) {
      this.workActive = work;
      this.isWorkActive = true;
    }
  }

  closeWork(): void {
    if (this.workActive !== null && this.isWorkActive === true) {
      this.workActive = null;
      this.isWorkActive = false;
    }
  }

  // Show and Close Portfolio

  ifBg: boolean = false;
  hideModal: boolean = true; //teste
  hideBg: boolean = true; //teste

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
