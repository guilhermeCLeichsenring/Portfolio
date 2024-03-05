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
        name: 'Landpage',
        description: 'AAAAAAAAAAAAAAAAAAAA',
      },
      {
        id: 2,
        name: 'Web Design',
        description: 'BBBBBBBBBBBBBB',
      },
      {
        id: 3,
        name: 'Integração BD',
        description: 'CCCCCCCCCCCCCCCCCCCCC',
      },
      {
        id: 4,
        name: 'E commerce',
        description: 'DDDDDDDDDDDDDDDDDDDDDDDDDD',
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
