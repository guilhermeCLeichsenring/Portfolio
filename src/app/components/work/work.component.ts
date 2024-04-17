import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { text } from 'stream/consumers';
import { title } from 'process';
import { link } from 'fs';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements OnChanges {
  @Input() Work: any;

  workDefault: any = {
    id: 0,
    name: 'fsdfd',
    technologies: [''],
    type: '',
    mainColor: '',
    bgCard: '',
  };

  work: any = this.workDefault;

  // content

  contentDefault: any = {
    id: 0,
    sections: [],
    link: {
      icon: '',
      href: '',
    },
  };

  content: any = this.contentDefault;
  contents: any[] = [
    {
      id: 1,
      sections: [
        {
          number: '1.',
          title: 'Descrisão',
          text: 'Design web de um serviço de mecânica minimalista, mas que entrega identidade e proporciona uma ótima experiência ao usuário. Apresenta de forma efetiva a empresa, o agendamento, seus serviços e, o mais importante, como entrar em contato e se tornar um cliente.',
          list: [''],
          image: 'assets/portfolio/car-service/car-service.png',
        },
        {
          number: '2.',
          title: 'Pagínas',
          text: 'Esse design segue o conceito de "landing page" (página estática ou página de destino), onde todo o conteúdo do site e a apresentação da empresa são exibidos em uma única página. Muito utilizado para a apresentação de um negócio e em um site com poucas funcionalidades. As páginas são:',
          list: [
            'Home;',
            'Choose us;',
            'Sobre;',
            'Serviços;',
            'Comentários;',
            'Marque um atendimento.',
          ],
          image: 'assets/portfolio/car-service/pages.jpg',
        },
        {
          number: '3.',
          title: 'Responsividade',
          text: 'A aplicação segue as boas práticas de responsividade, tornando possível e única a experiência do usuário tanto no desktop quanto no mobile, de acordo com as especificidades de uso de cada dispositivo.',
          list: [''],
          image: 'assets/portfolio/car-service/responsividade.jpg',
        },
        {
          number: '4.',
          title: 'Feature: Atendimento',
          text: 'A feature de atendimento possibilita ao usuário registrar seus dados, serviço desejado e data para o atendimento. Esses dados poderão, futuramente, ser transferidos pelo WhatsApp e e-mail e/ou serem integrados a um sistema gerenciador de atendimentos.',
          list: [''],
          image: 'assets/portfolio/car-service/feature.jpg',
        },
      ],
      link: {
        icon: 'assets/element/tech/figma_icon.png',
        href: 'https://www.figma.com/file/02diAqiwaVHiWQnAChDBLr/Mecanica?type=design&node-id=35%3A898&mode=design&t=ewftKgu4sJE6NHbm-1',
      },
    },
    {
      id: 2,
      sections: [
        {
          number: '1.',
          title: 'Descrisão',
          text: 'O protótipo mobile de e-commerce será um exemplo das melhores práticas de UI/UX, garantindo uma experiência fluida e intuitiva para os usuários. Com navegação simplificada, um processo de checkout fácil e um compromisso com a acessibilidade, este modelo de design serve como referência para qualquer e-commerce, incentivando e engajando os usuários em suas compras.',
          list: [''],
          image: 'assets/portfolio/general-store/general-store-2.png',
        },
        {
          number: '2.',
          title: 'E-commerce',
          text: 'Esse design incorpora todos os padrões, páginas e funcionalidades que um e-commerce deve ter: página de cadastro, homepage, categorias, funcionalidade de pesquisa, produtos recomendados, itens salvos e uma página de perfil bem elaborada, que atende a todas as necessidades do usuário. Além disso, foi projetado um fluxo intuitivo para o usuário, facilitando tanto a busca por produtos quanto a conclusão da compra.',
          list: [''],
          image: 'assets/portfolio/general-store/pages.jpg',
        },
        {
          number: '3.',
          title: 'Membro e visitante',
          text: 'A elaboração desse design levou em consideração as diferenças entre o modo visitante e o modo cadastrado de um aplicativo. O membro cadastrado tem acesso desde o início a personalizações exclusivas, como selecionar suas categorias de produtos favoritos, salvar produtos e receber recomendações, entre outras funcionalidades. Por outro lado, o visitante pode navegar pelos produtos livremente, sem a necessidade de se cadastrar.',
          list: [''],
          image: 'assets/portfolio/general-store/member, no-member.jpg',
        },
        {
          number: '4.1',
          title: 'Feature: Cadastro',
          text: 'Ao abrir o aplicativo pela primeira vez, o usuário é recebido com uma mensagem de boas-vindas e uma breve descrição sobre suas funcionalidades. Em seguida, ele tem a opção de entrar em sua conta, acessar como visitante ou se cadastrar. Na seção de cadastro, o usuário será solicitado a inserir os dados pessoais necessários e, em seguida, a selecionar seus interesses.',
          list: [''],
          image: 'assets/portfolio/general-store/feature.register.jpg',
        },
        {
          number: '4.2',
          title: 'Feature: Adicionar ao carrinho',
          text: 'Outra prototipação desenvolvida neste design é a ação de adicionar ao carrinho. O carrinho de compras, sem dúvida, é uma das partes mais importantes de um e-commerce. Por isso, foi planejado para ser intuitivo, informativo e minimalista, estando acessível em toda a navegação do usuário, lembrando-o dos itens adicionados. Os usuários podem adicionar unidades e remover produtos facilmente.',
          list: [''],
          image: 'assets/portfolio/general-store/feature.addtocart.jpg',
        },
        {
          number: '4.3',
          title: 'Feature: Compra',
          text: 'Como mencionado anteriormente, acessar o carrinho é simples, e a partir dali é apenas uma questão de concluir a compra. O botão para finalizar a compra está bem posicionado para que o usuário possa concluir a transação e ter uma visão clara do custo total. Além disso, são disponibilizadas opções para configurar o método de pagamento, o endereço de entrega e inserir códigos promocionais. Ao finalizar a compra, o usuário é recebido com uma animação de congratulações, proporcionando uma experiência positiva e incentivando-o a repetir a ação no futuro.',
          list: [''],
          image: 'assets/portfolio/general-store/feature.buy.jpg',
        },
        {
          number: '4.4',
          title: 'Feature: Busca',
          text: 'A função de busca também foi projetada para proporcionar uma experiência superior ao usuário, contendo apenas os elementos necessários e evitando adições desnecessárias que possam complicar a navegação. Ela inclui uma barra de pesquisa, sugestões de pesquisa conforme o usuário digita, uma lista de resultados encontrados e opções de filtro.',
          list: [''],
          image: 'assets/portfolio/general-store/feature.search.jpg',
        },
        {
          number: '5.',
          title: 'Observação',
          text: 'Este design foi desenvolvido com propósitos educacionais, elaborado durante o curso e concluído juntamente com ele. Ainda tenho planos de criar sua versão desktop e, se surgir a oportunidade, implementá-lo em código para um e-commerce real.',
          list: [''],
          image: 'assets/portfolio/general-store/pages.jpg',
        },
      ],
      link: {
        icon: 'assets/element/tech/figma_icon.png',
        href: 'https://www.figma.com/file/8aSvwbUjuJg0jQs8WCTLpl/E-commerce?type=design&node-id=1%3A3&mode=design&t=VQtrqkNhqtTB6mg1-1',
      },
    },
    {
      id: 3,
      sections: [
        {
          number: '1.',
          title: 'Descrisão',
          text: 'A aplicação web de apresentação de um serviço médico é minimalista, porém distintiva, proporcionando uma excelente experiência ao usuário. Destaca de forma eficaz nossa empresa, serviços e como entrar em contato para se tornar cliente. Nosso objetivo é oferecer uma experiência online informativa e agradável, garantindo a confiança dos clientes.',
          list: [''],
          image: 'assets/portfolio/doctor-care/doctor-care.png',
        },
        {
          number: '2.',
          title: 'Pagínas',
          text: 'Essa aplicação segue o conceito de "landing page" (página estática ou de destino), onde todo o conteúdo do site e a apresentação da empresa são condensados em uma única página. Este formato é amplamente utilizado para a apresentação de um negócio e para sites com poucos recursos. As páginas incluídas são:',
          list: ['Home;', 'Serviços;', 'Sobre;', 'Contato.'],
          image: 'assets/portfolio/doctor-care/pages.jpg',
        },
        {
          number: '3.',
          title: 'Responsividade',
          text: 'A aplicação segue as melhores práticas de responsividade, garantindo uma experiência única e consistente para o usuário tanto no desktop quanto no mobile. Adaptada para atender às diferentes necessidades de uso de cada modelo, proporciona uma navegação fluida e otimizada em qualquer dispositivo.',
          list: [''],
          image: 'assets/portfolio/doctor-care/responsividade.jpg',
        },
      ],
      link: {
        icon: 'assets/element/tech/github_icon.png',
        href: 'https://github.com/guilhermeCLeichsenring/doctorcare',
      },
    },
    {
      id: 4,
      sections: [
        {
          number: '1.',
          title: 'Descrisão',
          text: 'Site para um studio de beleza, visando proporcionar uma experiência excepcional aos usuários. Destaca de forma eficaz os serviços oferecidos, detalhes sobre a empresa e as formas de contato para se tornar um cliente. Com o foco em passar uma imagem séria de compromisso com a beleza, não só pelos serviços oferecidos, mas também pela própria composição da página. Nosso compromisso é oferecer uma experiência online informativa e agradável, construindo assim a confiança dos nossos clientes.',
          list: [''],
          image: 'assets/portfolio/boeira-studio/boeira-studio.png',
        },
        {
          number: '2.',
          title: 'Pagínas',
          text: 'O site é composto por diferentes seções:',
          list: [
            'Página Inicial (STUDIO): Aqui, oferecemos uma breve apresentação do negócio, juntamente com links para outras partes do site, seguindo o conceito de uma landing page;',
            'Procedimentos: Nesta seção, apresentamos uma lista abrangente de todos os tipos de procedimentos, organizados cuidadosamente por categorias;',
            'Equipe: Esta página contém uma lista completa de toda a equipe, acompanhada de fotos, nomes e funções de cada membro;',
            'Espaço: Aqui, dividimos em três descrições. Primeiramente, um texto de boas-vindas. Em seguida, informações sobre o ambiente de procedimentos. Por fim, detalhamos nosso compromisso em proporcionar a melhor experiência para nossas clientes;',
            'Sobre: Na última página, oferecemos um texto detalhado sobre a história e os objetivos do negócio.',
          ],
          image: 'assets/portfolio/boeira-studio/pages.jpg',
        },
        {
          number: '3.1',
          title: 'Objetivo: Apresentação e captação de clientes',
          text: 'O objetivo principal do site é apresentar e atrair clientes. Através da construção da aplicação, evidencia-se o compromisso com o cuidado da beleza que o estúdio se propõe a oferecer. Dessa forma, busca-se demonstrar que o Boeira Studio é a melhor escolha para cuidados pessoais. Para facilitar o contato, a seção de contato é simples e acessível, incluindo um botão de hover para contato direto pelo WhatsApp.',
          list: [''],
          image: 'assets/portfolio/boeira-studio/objective1.jpg',
        },
        {
          number: '3.2',
          title: 'Objetivo: Amostragem de catálogo.',
          text: 'A apresentação do catálogo foi sem dúvida uma das partes mais importantes no desenvolvimento do site, dado que o studio de beleza oferece uma ampla variedade de procedimentos. Foi necessário categorizar os cuidados para diferentes partes do rosto e corpo, tornando a navegação pelo catálogo fluida e simples para o usuário.',
          list: [''],
          image: 'assets/portfolio/boeira-studio/objective2.jpg',
        },
        {
          number: '4.',
          title: 'Responsividade',
          text: 'A aplicação segue as melhores práticas de responsividade, garantindo uma experiência única e consistente para o usuário tanto no desktop quanto no mobile. Adaptada para atender às diferentes necessidades de uso de cada modelo, proporciona uma navegação fluida e otimizada em qualquer dispositivo.',
          list: [''],
          image: 'assets/portfolio/boeira-studio/responsividade.jpg',
        },
      ],
      link: {
        icon: 'assets/element/tech/github_icon.png',
        href: 'https://github.com/guilhermeCLeichsenring/BoeiraStudio',
      },
    },
    {
      id: 5,
      sections: [
        {
          number: '1.',
          title: 'Descrisão',
          text: 'Este é um projeto web em Angular com propósitos educacionais, onde se pratica o uso do Angular HTTP Client e seus princípios para criar um site de comércio eletrônico genérico. Foi utilizada uma API disponível online para a obtenção (GET) dos produtos.',
          list: [''],
          image: 'assets/portfolio/generic-store/generic-store.png',
        },
        {
          number: '2.',
          title: 'E-commerce',
          text: 'Este é um projeto de e-commerce cujo objetivo principal é a leitura de uma API externa de produtos genéricos. Os usuários podem navegar pelo site e adicionar esses produtos ao carrinho de compras. Embora algumas funcionalidades ainda estejam em falta para tornar o e-commerce completo, a função principal desta aplicação, que é a leitura e manipulação da API, é realizada com sucesso.',
          list: [''],
          image: 'assets/portfolio/generic-store/ecommerce.jpg',
        },
        {
          number: '3.',
          title: 'Features disponíveis',
          text: 'Algumas funcioonalidades disponíveis são:',
          list: [
            'Procurar produto pela barra de pesquisa;',
            'Procurar por categoria;',
            'Listar todos;',
            'Adicionar e deletar produtos do carrinho.',
          ],
          image: 'assets/portfolio/generic-store/features.jpg',
        },
      ],
      link: {
        icon: 'assets/element/tech/figma_icon.png',
        href: 'https://github.com/guilhermeCLeichsenring/STORE-APP',
      },
    },
    {
      id: 6,
      sections: [
        {
          number: '1.',
          title: 'Descrisão',
          text: 'Aplicação web que realiza operações CRUD por meio da comunicação com uma API REST de um serviço de registro financeiro. Esta aplicação é capaz de contabilizar transações, suas categorias, bancos relacionados a elas e os usuários associados.',
          list: [''],
          image: 'assets/portfolio/fintech/fintech.png',
        },
        {
          number: '2.1',
          title: 'Table: Transaction',
          text: 'Essa tabela foi o principal, responsável por guardar todos os Id e realizar a principal atividade da aplicação:',
          list: [
            'Id;',
            'Value;',
            'Description;',
            'Type (boolean wich true for Receipt & false for Expend);',
            'Created (DateTime);',
            'UserId;',
            'CategoryId;',
            'BanckId.',
          ],
          image: 'assets/portfolio/fintech/t_transaction.jpg',
        },
        {
          number: '2.2',
          title: 'Table: User',
          text: 'Tabela responsável por armazenar as informações do usuário:',
          list: [
            'Id;',
            'Name;',
            'Email;',
            'Password;',
            'PhoneNumber;',
            'Created (DateTime);',
            'List of Categorys;',
            'List of Transactions.',
          ],
          image: 'assets/portfolio/fintech/t_user.jpg',
        },
        {
          number: '2.3',
          title: 'Table: Category',
          text: 'Armazena as diferentes categorias de transação',
          list: [
            'Id;',
            'Name;',
            'Type (boolean wich true is Receipt & false is Expend);',
            'Created (DateTime);',
            'UserId;',
          ],
          image: 'assets/portfolio/fintech/t_category.jpg',
        },
        {
          number: '2.4',
          title: 'Table: Bank',
          text: 'Armazena todos os bancos do Brasil. Única tabela apenas com métodos GET, seus dados foram inseridos pelo próprio sistema.',
          list: ['Id;', 'Value;', 'Label.'],
          image: 'aassets/portfolio/fintech/t_bank.jpg',
        },
        {
          number: '3',
          title: 'Features adicionais.',
          text: 'Além das possibilidades de se exeecutar os CRUDS, foram adicionadas as seguintes funções:',
          list: [
            'Somar todos os recebimentos;',
            'Somar todos os gastos ;',
            'Soma da diferença entre gastos e recebimentos;',
          ],
          image: 'assets/portfolio/fintech/features.jpg',
        },
        {
          number: '4',
          title: 'Banco de dados',
          text: 'Essa aplicação é ligada ao banco de dados da Oracle (Oracle - SQL Developer). Onde todos os dados das tabelas citadas anteriormente são manipulados.',
          list: [''],
          image: 'assets/portfolio/fintech/oracle.jpg',
        },
      ],
      link: {
        icon: 'assets/element/tech/github_icon.png',
        href: 'https://github.com/guilhermeCLeichsenring/FintechAPI',
      },
    },
  ];

  selectContent(id: number): void {
    this.content = this.contents.find((i) => i.id === id);
  }

  ngOnChanges(): void {
    if (this.Work !== null) {
      this.work = this.Work;

      if (this.work.id !== 0) {
        this.selectContent(this.work.id);
      }
    } else {
      this.work = this.workDefault;
      this.content = this.contentDefault;
    }
  }
}
