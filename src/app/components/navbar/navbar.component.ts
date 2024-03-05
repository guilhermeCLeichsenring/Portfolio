import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isStatic: boolean = true;
  hideMenu: boolean = true;
  navbar: any;

  @Input() LoadNav!: boolean;

  contactIcons: any[] = [];
  @Input() ContactIcons!: any[];

  elementsTop: number[] = [];
  @Input() ElementsTop!: number[];

  elementsLoc: any[] = [];
  @Input() ElementsLoc!: number[];

  constructor(private elRef: ElementRef) {
    this.navbar = this.elRef.nativeElement.querySelector('#navbar1');
  }

  ngOnInit(): any {
    this.contactIcons = this.ContactIcons;
    this.elementsTop = this.ElementsTop;
    this.elementsLoc = this.ElementsLoc;
  }

  //SideMenu

  openSideMenu() {
    this.hideMenu = false;
    console.log('------------ open menu -----------');
  }

  closeSideMenu() {
    this.hideMenu = true;
  }

  // Scroll

  navList: any[] = [
    {
      id: 1,
      name: 'Portfólio',
      active: false,
      url: 'assets/element/sidemap/icon-portfolio-sidemap.png',
    },
    {
      id: 2,
      name: 'Serviços',
      active: false,
      url: 'assets/element/sidemap/icon-service-sidemap.png',
    },
    {
      id: 3,
      name: 'Sobre',
      active: false,
      url: 'assets/element/sidemap/icon-about-sidemap.png',
    },
    {
      id: 4,
      name: 'Contato',
      active: false,
      url: 'assets/element/sidemap/icon-contact-sidemap.png',
    },
  ];

  changeActiveState(id: number, state: boolean): void {
    this.navList.forEach((item) => {
      if (item.id === id && state === true) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  @HostListener('window:scroll', ['event'])
  onScroll() {
    const windowTop = window.scrollY;

    const heightNav = this.navbar.offsetHeight;

    if (windowTop > heightNav * 2) {
      this.isStatic = false;
    } else {
      this.isStatic = true;
    }

    if (windowTop > this.elementsTop[0]) {
    }
    if (windowTop > this.elementsTop[1]) {
      this.changeActiveState(1, true);
    }

    if (windowTop > this.elementsTop[2] - 170) {
      this.changeActiveState(1, false);
      this.changeActiveState(2, true);
    }
    if (windowTop > this.elementsTop[3]) {
      this.changeActiveState(2, false);
      this.changeActiveState(3, true);
    }
    if (windowTop > this.elementsTop[4]) {
      this.changeActiveState(3, false);
      this.changeActiveState(4, true);
    }
  }

  scrollTo(id: number) {
    const elementTop = this.elementsLoc[id] - 150;
    window.scrollTo({ top: elementTop, behavior: 'smooth' });

    this.closeSideMenu();
  }
}
