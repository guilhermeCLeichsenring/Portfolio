import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  isHover: boolean = false;

  hideLine: boolean = false;
  hideArrow: boolean = true;

  hideImg: boolean = false;
  hideList: boolean = true;
  hideText: boolean = true;

  services: any[] = [''];
  content: string = '';
  showClass: boolean = false;
  selectedServiceId: number | null = null;

  ngOnInit(): void {
    this.services = [
      {
        id: 1,
        name: 'Landing Page',
        description:
          'Crie a sua landing page para direcionar o trafego dos usuários para uma ação desejada: como fazer uma compra, preencher um formulário ou increver-se em uma lista de e-mail.',
      },
      {
        id: 2,
        name: 'E-commerce',
        description:
          'Um e-commerce sem dúvida alguma é a melhor maneira de anunciar e vender seus produtos. Apreseente para o usuário tudo que você fornece, suas produções e descrição de cada tópico e produto.',
      },
      {
        id: 3,
        name: 'Web Design',
        description:
          'Já tem um site e quer melhorar a captação e como ele se apresenta a seus usuários? Com um design atraente utilizando os melhores padrões do mercado e boas praticas, podemos fazer disso uma realidade.',
      },
      {
        id: 4,
        name: 'Integração BD',
        description:
          'Uma interface de sistema interativo com banco de dados é um ambiente digital projetado para facilitar a interação entre os usuários e os dados armazenados em um banco de dados. Esses sistemas são desenvolvidos para fornecer acesso rápido e eficiente aos dados, permitindo que os usuários realizem consultas, atualizem informações e executem operações diversas de maneira intuitiva.',
      },
    ];
  }

  showList() {
    if (this.hideList === true) {
      this.hideList = false;
    } else {
      this.closeContent();
      this.hideList = true;
    }
  }

  showContent(serviceId: number) {
    this.showClass = false;
    this.hideArrow = false;
    this.hideLine = true;
    this.hideImg = true;
    this.hideText = false;

    this.content =
      this.services.find((service) => service.id === serviceId)?.description ||
      '';

    this.selectedServiceId = serviceId;

    if (
      this.selectedServiceId ==
      this.services.find((service) => service.id === serviceId).id
    ) {
      this.showClass = !this.showClass;
    }
  }

  closeContent() {
    if (this.hideArrow === false) {
      this.hideArrow = true;
      this.hideLine = false;
      this.showClass = false;
      this.content = '';
      this.selectedServiceId = null;

      this.hideImg = false;
      this.hideList = true;
      this.hideText = true;
    }
  }
}
