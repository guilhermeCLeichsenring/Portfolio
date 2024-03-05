import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ServiceComponent } from './content/service/service.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HiremeComponent } from './components/hireme/hireme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    PortfolioComponent,
    SpinnerComponent,
    HiremeComponent,
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  home: any;
  port: any;
  serv: any;
  about: any;
  cont: any;

  loadPage: boolean = false;

  // scroll

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object // Criar objeto de execução em browser
  ) {
    this.home = elRef.nativeElement.querySelector('#home');
    this.port = elRef.nativeElement.querySelector('#portfolio');
    this.serv = elRef.nativeElement.querySelector('#service');
    this.about = elRef.nativeElement.querySelector('#about');
    this.cont = elRef.nativeElement.querySelector('#contact');
  }

  elementsTop: Array<any> = [];
  elementsLocation: Array<any> = [];
  hideHome: boolean = true;
  hidePort: boolean = true;
  hideServ: boolean = true;
  hideAbout: boolean = true;

  hideCont: boolean = true;

  onSpinner(): void {
    setTimeout(() => {
      this.loadPage = true;
    }, 3200);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Load Menu

      this.onSpinner();

      this.elementsLocation.push(this.home.offsetTop);
      this.elementsLocation[1] = this.port.offsetTop;
      this.elementsLocation[2] = this.serv.offsetTop;
      this.elementsLocation[3] = this.about.offsetTop;
      this.elementsLocation[4] = this.cont.offsetTop;

      this.elementsTop[0] = this.home.offsetTop;
      this.elementsTop[1] = this.port.offsetTop - this.home.offsetHeight;
      this.elementsTop[2] = this.serv.offsetTop - this.port.offsetHeight;
      this.elementsTop[3] = this.about.offsetTop - this.serv.offsetHeight;
      this.elementsTop[4] = this.cont.offsetTop - this.about.offsetHeight;

      console.log('Running in browser');
    } else {
      console.log('Not executed in browser');
    }
  }

  @HostListener('window:scroll', ['event'])
  OnScroll() {
    const windowTop = window.scrollY;

    if (windowTop > this.elementsTop[0]) {
      this.hideHome = false;
    }
    if (windowTop > this.elementsTop[1]) {
      this.hidePort = false;
    }
    if (windowTop > this.elementsTop[2] - 170) {
      this.hideServ = false;
    }
    if (windowTop > this.elementsTop[3]) {
      this.hideAbout = false;
    }
    if (windowTop > this.elementsTop[4]) {
      this.hideCont = false;
    }
  }

  //contact list
  contactIcons: any[] = [
    {
      id: 1,
      name: 'whatsapp',
      image:
        'M37.8461 1.27652e-05C58.4975 -0.0171301 75.7147 17.2343 75.7147 37.8457C75.7147 58.4743 58.4975 75.6743 37.8461 75.6629C32.4191 75.6657 27.0546 74.5044 22.1147 72.2572L3.37181 75.6457C2.87429 75.7368 2.36149 75.6942 1.88582 75.5223C1.41014 75.3503 0.988642 75.0552 0.66438 74.667C0.340117 74.2788 0.124716 73.8115 0.0401843 73.3128C-0.0443475 72.8141 0.00501997 72.302 0.183243 71.8286L5.55467 57.5543C1.93589 51.6148 0.0184929 44.7951 0.0118143 37.84C0.0175286 17.2286 17.2175 0.0114413 37.8461 1.27652e-05ZM56.8461 53.92C52.6347 57.3257 46.1147 60.7657 39.8804 56.7657C31.709 51.5143 24.4747 44.6172 19.229 36.44C16.149 31.6514 19.0461 23.9829 23.3775 19.3086C25.1032 17.44 27.949 17.7372 29.829 19.4514L33.7832 23.0629C34.9832 24.16 35.029 26.0686 34.2804 27.52C33.0975 29.7943 32.4004 32.8514 33.8632 35.1314C35.7032 37.9886 37.9661 40.8057 43.3718 42.4457C45.0061 42.9486 47.1032 42.7314 48.8861 42.0114C50.3775 41.4057 52.269 41.4114 53.3718 42.5886L57.0518 46.5029C59.0804 48.6629 59.149 52.0572 56.8461 53.92Z',
      width: 76,
      height: 76,
      viewBox: '0 0 76 76',
      fill: 'black',
      href: 'https://api.whatsapp.com/send?phone=5547999955656',
    },
    {
      id: 2,
      name: 'linkedin',
      image:
        'M13.3333 0C9.79711 0 6.40573 1.40476 3.90524 3.90524C1.40476 6.40573 0 9.79711 0 13.3333V60C0 63.5362 1.40476 66.9276 3.90524 69.4281C6.40573 71.9286 9.79711 73.3333 13.3333 73.3333H60C63.5362 73.3333 66.9276 71.9286 69.4281 69.4281C71.9286 66.9276 73.3333 63.5362 73.3333 60V13.3333C73.3333 9.79711 71.9286 6.40573 69.4281 3.90524C66.9276 1.40476 63.5362 0 60 0H13.3333ZM17.35 23.0333C18.8573 23.0333 20.3029 22.4346 21.3687 21.3687C22.4346 20.3029 23.0333 18.8573 23.0333 17.35C23.0333 15.8427 22.4346 14.3971 21.3687 13.3313C20.3029 12.2654 18.8573 11.6667 17.35 11.6667C15.8427 11.6667 14.3971 12.2654 13.3313 13.3313C12.2654 14.3971 11.6667 15.8427 11.6667 17.35C11.6667 18.8573 12.2654 20.3029 13.3313 21.3687C14.3971 22.4346 15.8427 23.0333 17.35 23.0333ZM23.03 61.6667V27.5767H11.6667V61.6667H23.03ZM37.8033 27.5767H27.5767V61.6667H37.8033V41.1C39.12 38.96 41.3933 36.6667 44.62 36.6667C49.1667 36.6667 50.3033 41.2133 50.3033 43.4867V61.6667H61.6667V43.4867C61.6667 37.3933 59.01 27.5767 49.1667 27.5767C42.9067 27.5767 39.4333 29.86 37.8 32L37.8033 27.5767Z',
      width: 74,
      height: 74,
      viewBox: '0 0 74 74',
      fill: 'black',
      href: 'https://www.linkedin.com/in/guilherme-leichsenring/',
    },
    {
      id: 3,
      name: 'github',
      image:
        'M40.012 1.76701e-06C30.4893 -0.00282739 21.278 3.39173 14.0344 9.57329C6.79085 15.7548 1.99021 24.3178 0.495748 33.7225C-0.998715 43.1272 0.911049 52.7565 5.88163 60.879C10.8522 69.0014 18.5575 75.0841 27.612 78.0333H28.5453C29.3968 78.0748 30.2318 77.7886 30.8786 77.2333C31.2678 76.8944 31.5772 76.4736 31.7847 76.001C31.9921 75.5285 32.0925 75.0159 32.0786 74.5V73.8V70.1667C32.0518 69.9503 31.982 69.7415 31.8732 69.5526C31.7644 69.3637 31.6189 69.1985 31.4453 69.0667C31.2556 68.9148 31.035 68.8063 30.7989 68.7487C30.5628 68.6912 30.317 68.6859 30.0786 68.7333C21.112 70.6667 19.212 65.0667 19.112 64.7C17.9844 61.7325 15.9711 59.1839 13.3453 57.4L12.8453 57.0333C13.2389 56.8432 13.6765 56.7626 14.112 56.8C14.9427 56.9249 15.7278 57.26 16.3928 57.7733C17.0578 58.2866 17.5807 58.9613 17.912 59.7333C19.2015 61.9786 21.3116 63.6362 23.7983 64.3574C26.2851 65.0785 28.9546 64.807 31.2453 63.6C31.4928 63.49 31.7117 63.3246 31.8851 63.1165C32.0585 62.9085 32.1818 62.6633 32.2453 62.4C32.3804 60.8699 33.0398 59.4334 34.112 58.3333C34.3591 58.1202 34.5383 57.8391 34.6272 57.5251C34.7161 57.211 34.7108 56.8778 34.612 56.5667C34.521 56.2551 34.3392 55.9777 34.0898 55.7699C33.8405 55.5621 33.5348 55.4333 33.212 55.4C25.312 54.5 17.212 51.7333 17.212 38.1C17.1544 34.6717 18.4198 31.353 20.7453 28.8333C20.9555 28.6032 21.0954 28.3176 21.1486 28.0105C21.2017 27.7034 21.1659 27.3874 21.0453 27.1C20.1221 24.4998 20.1339 21.6591 21.0786 19.0667C24.1568 19.6167 27.0461 20.9353 29.4786 22.9C29.6811 23.0384 29.9126 23.1284 30.1553 23.1631C30.3981 23.1978 30.6456 23.1762 30.8786 23.1C33.8581 22.3054 36.9284 21.902 40.012 21.9C43.1076 21.8853 46.1911 22.289 49.1786 23.1C49.4062 23.1759 49.6484 23.1973 49.8858 23.1626C50.1231 23.1279 50.349 23.0379 50.5453 22.9C52.9748 20.9303 55.8654 19.6111 58.9453 19.0667C59.8609 21.6319 59.8609 24.4348 58.9453 27C58.8247 27.2898 58.7921 27.6086 58.8513 27.9168C58.9106 28.225 59.0592 28.509 59.2786 28.7333C61.5681 31.2329 62.8196 34.5106 62.7786 37.9C62.7786 51.5667 54.6786 54.3 46.7453 55.1667C46.4224 55.2 46.1168 55.3288 45.8675 55.5366C45.6181 55.7444 45.4363 56.0218 45.3453 56.3333C45.2492 56.6394 45.2454 56.967 45.3343 57.2753C45.4232 57.5835 45.6009 57.8588 45.8453 58.0667C46.5826 58.8364 47.1458 59.7556 47.4967 60.7621C47.8475 61.7686 47.9778 62.8387 47.8786 63.9V74.5C47.8712 75.0182 47.9778 75.5316 48.191 76.004C48.4041 76.4764 48.7185 76.8961 49.112 77.2333C49.6084 77.6117 50.1878 77.8664 50.8022 77.9766C51.4166 78.0867 52.0484 78.049 52.6453 77.8667C61.596 74.8208 69.1784 68.7028 74.0474 60.5981C78.9163 52.4934 80.757 42.926 79.2428 33.5932C77.7286 24.2605 72.9575 15.7658 65.7759 9.61625C58.5943 3.46667 49.4666 0.0597795 40.012 1.76701e-06Z',
      width: 80,
      height: 79,
      viewBox: '0 0 80 79',
      fill: 'black',
      href: 'https://github.com/guilhermeCLeichsenring?tab=repositories',
    },
    {
      id: 4,
      name: 'email',
      image:
        'M0 8.57143C0 6.29814 0.903059 4.11797 2.51051 2.51051C4.11797 0.903059 6.29814 0 8.57143 0H71.4286C73.7019 0 75.882 0.903059 77.4895 2.51051C79.0969 4.11797 80 6.29814 80 8.57143V10.5257L42.1886 35.7371C41.5285 36.1344 40.7702 36.3383 40 36.3257C39.2298 36.3383 38.4715 36.1344 37.8114 35.7371L0 10.5257V8.57143ZM0 19.1086V57.1429C0 59.4161 0.903059 61.5963 2.51051 63.2038C4.11797 64.8112 6.29814 65.7143 8.57143 65.7143H71.4286C73.7019 65.7143 75.882 64.8112 77.4895 63.2038C79.0969 61.5963 80 59.4161 80 57.1429V19.1086L46.1314 41.6914L46.1029 41.7143C44.2796 42.8738 42.1607 43.4829 40 43.4686C37.8571 43.4686 35.6971 42.8857 33.8971 41.7143L33.8686 41.6914L0 19.1086Z',
      width: 80,
      height: 66,
      viewBox: '0 0 80 66',
      fill: 'black',
      href: 'mailto:guicl@live.com.br?subject= Entre em Contato/',
    },
  ];
}
