import { Component, ElementRef, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-hireme',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './hireme.component.html',
  styleUrl: './hireme.component.css',
})
export class HiremeComponent {
  name: string = '';
  email: string = '';
  tel: string = '';

  business: string = '';
  businessType: string = '';
  instagram: string = '';
  facebook: string = '';
  youtube: string = '';

  service: string = '';
  serviceDetails: string = '';
  dayTime: string = '';

  constructor(private elementRef: ElementRef, private shared: SharedService) {
    this.shared.getHiremeOn().subscribe((result: boolean) => {
      this.openHireme(result);
    });
  }

  // Select
  selectOn1: boolean = false;
  hideList1: boolean = true;

  showOptions1(): void {
    if (this.service.length <= 0) {
      this.selectOn1 = !this.selectOn1;
      this.hideList1 = !this.hideList1;
    } else {
      this.selectOn1 = true;
      this.hideList1 = !this.hideList1;
    }
  }

  selectOption1(option: string): void {
    if (this.selectOn1 === true) {
      this.service = option;
    }

    if (this.service === option) {
      this.hideList1 = true;
    }
  }

  selectOn2: boolean = false;
  hideList2: boolean = true;

  showOptions2(): void {
    if (this.dayTime.length <= 0) {
      this.selectOn2 = !this.selectOn2;
      this.hideList2 = !this.hideList2;
    } else {
      this.selectOn2 = true;
      this.hideList2 = !this.hideList2;
    }
  }

  selectOption2(option: string): void {
    if (this.selectOn2 === true) {
      this.dayTime = option;
    }

    if (this.dayTime === option) {
      this.hideList2 = true;
    }
  }

  // Textarea

  textOn: boolean = false;
  activeTextArea() {
    this.textOn = !this.textOn;
  }

  // ClickOut

  clickOutside() {
    this.selectOn1 = false;
    this.hideList1 = true;
    this.selectOn2 = false;
    this.hideList2 = true;
    this.textOn = false;

    console.log('click out');
  }

  // Cards contents

  content1 = {
    id: 1,
    hideForm1: false,
    hideForm2: true,
    hideHr: true,
    hideSelect1: true,
    hideSelect2: true,
    hideTextarea: true,
    title: 'Quem é você?',
    subtitle: 'Conte-me sobre você e como podemos entrar em contato.',
    form1: [
      {
        name: 'name',
        placeholder: 'Nome*',
        required: true,
        type: 'text',
        empty: false,
        value: '',
      },
      {
        name: 'email',
        placeholder: 'Email*',
        required: true,
        type: 'text',
        empty: false,
        value: '',
      },
      {
        name: 'tel',
        placeholder: 'Telefone',
        required: false,
        type: 'tel',
        empty: false,
        value: '',
      },
    ],
    form2: [],
    select1: {},
    select2: {},
    text: {
      name: 'Mais detalhes',
      value: '',
    },
    progressBar: [true, false, false],
    buttonContent: 'Próximo',
  };

  content2 = {
    id: 2,
    hideForm1: false,
    hideForm2: false,
    hideHr: false,
    hideSelect1: true,
    hideSelect2: true,
    hideTextarea: true,
    title: 'Fale Sobre o seu negócio',
    subtitle: 'Preencha os dados a baixo',
    form1: [
      {
        name: 'business',
        placeholder: 'Nome do seu negócio*',
        required: true,
        type: 'text',
        empty: false,
        value: '',
      },
      {
        name: 'businessType',
        placeholder: 'Qual é o seu tipo de negócio?*',
        required: true,
        type: 'text',
        empty: false,
        value: '',
      },
    ],
    form2: [
      {
        name: 'instagram',
        placeholder: 'Instagram',
        required: false,
        type: 'text',
        empty: false,
        value: '',
      },
      {
        name: 'facebook',
        placeholder: 'Facebook',
        required: false,
        type: 'text',
        empty: false,
        value: '',
      },
      {
        name: 'youtube',
        placeholder: 'youtube',
        required: false,
        type: 'text',
        empty: false,
        value: '',
      },
    ],
    select1: {},
    select2: {},
    text: {
      name: 'Mais detalhes',
      value: '',
    },
    progressBar: [false, true, false],
    buttonContent: 'Próximo',
  };

  content3 = {
    id: 3,
    hideForm1: false,
    hideForm2: true,
    hideHr: false,
    hideSelect1: false,
    hideSelect2: false,
    hideTextarea: true,
    title: 'Como podemos te ajudar?',
    subtitle: 'Preencha os dados a baixo',
    form1: [
      {
        name: 'serviceDetails',
        placeholder: 'Mais detalhes',
        required: false,
        type: 'text',
        empty: false,
        value: '',
      },
    ],
    form2: [],
    select1: {
      label: 'Serviços*',
      options: ['option1', 'option2', 'option3'],
      empty: false,
    },
    select2: {
      label: 'Período para atendimento',
      options: [
        'Manha',
        'tarde',
        'noite',
        'Qualquer período',
        'Definir após contato',
      ],
      empty: false,
    },
    text: {
      name: 'Mais detalhes',
      value: '',
    },
    progressBar: [false, false, true],
    buttonContent: 'Finalizar',
  };

  // Cards functions

  main: any = this.content1;

  hideMain: boolean = true;
  hideEnd: boolean = true;

  nextForm(card: number) {
    switch (card) {
      case 0:
        this.hideMain = false;
        break;
      case 1:
        this.name =
          this.content1.form1.find((input) => input.name === 'name')?.value ||
          '';
        this.email =
          this.content1.form1.find((input) => input.name === 'email')?.value ||
          '';
        this.tel =
          this.content1.form1.find((input) => input.name === 'tel')?.value ||
          '';

        this.main.form1.forEach((input: any) => {
          if (input.required === true && input.value.length <= 0) {
            input.empty = true;
          }
        });

        if (this.name.length > 0 && this.email.length > 0) {
          this.main = this.content2;
        } else {
          window.alert('Preencha os campos aleatórios!');
        }

        break;
      case 2:
        this.business =
          this.content2.form1.find((input) => input.name === 'business')
            ?.value || '';
        this.businessType =
          this.content2.form1.find((input) => input.name === 'businessType')
            ?.value || '';

        this.instagram =
          this.content2.form2.find((input) => input.name === 'instagram')
            ?.value || '';
        this.facebook =
          this.content2.form2.find((input) => input.name === 'facebook')
            ?.value || '';
        this.youtube =
          this.content2.form2.find((input) => input.name === 'youtube')
            ?.value || '';

        if (this.business.length > 0 && this.businessType.length > 0) {
          this.main = this.content3;
        } else {
          window.alert('Preencha os campos aleatórios!');
          this.main.form1.forEach((input: any) => {
            if (input.required === true && input.value.length <= 0) {
              input.empty = true;
            }
          });
        }
        break;
      case 3:
        if (this.service.length <= 0) {
          window.alert('Preencha os campos aleatórios!');
          this.main.select1.empty = true;
        } else {
          this.hideEnd = false;
          this.sendForm();
        }
        break;
      case 4:
        this.closeHireme();
        break;
      default:
        window.alert(
          'Erro ao preencher o formulário, tente novamente mais tarde'
        );
        break;
    }
  }

  backForm(card: number) {
    switch (card) {
      case 0:
        this.closeHireme();
        break;
      case 1:
        this.hideMain = true;
        break;
      case 2:
        this.main = this.content1;
        break;
      case 3:
        this.main = this.content2;
        break;
      case 4:
        this.closeHireme();
        break;
      default:
        window.alert(
          'Erro ao preencher o formuláario, tente novamente mais tarde'
        );
        break;
    }
  }

  // Envia Formulário

  sendForm() {
    const serviceForm = `Informações Pessoais \n\n Nome: ${this.name} \n Email: ${this.email} \n Telefone: ${this.tel} \n\n\n  Informações do negócio \n\n Nome do negócio: ${this.business} \n Tipo do negócio: ${this.instagram} \n facebook: ${this.facebook} \n youtube: ${this.youtube} \n\n\n Serviço requisitado \n\n Serviço: ${this.service} \n Detalhes: ${this.serviceDetails} \n Período: ${this.dayTime} \n\n\n`;

    console.log(serviceForm);

    const mailto = `mailto:guicl@live.com.br?subject=Pedido Desenvolvimento &bcc=guitoca10@gmail.com.br&body=Informações do depido: \n\n\n ${serviceForm}`;

    window.location.href = mailto;
  }

  // Show and Close HIREME
  hireme: boolean = false;
  hideModal: boolean = true;
  hideBg: boolean = true;

  openHireme(hiremeOn: boolean) {
    if (hiremeOn == true) {
      this.hireme = true;
      setTimeout(() => {
        this.hideBg = false;
      }, 400);

      setTimeout(() => {
        this.hideModal = false;
      }, 800);
    }
  }

  closeHireme() {
    this.hideModal = true;

    setTimeout(() => {
      this.hideBg = true;
    }, 800);

    setTimeout(() => {
      this.hireme = false;
    }, 1000);
  }
}
