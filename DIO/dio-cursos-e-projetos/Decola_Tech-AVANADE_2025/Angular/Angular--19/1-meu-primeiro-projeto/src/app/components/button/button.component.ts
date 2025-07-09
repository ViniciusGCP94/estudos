import { Component } from '@angular/core'; //Contrato

@Component({                               // Abrir um objeto @Component ({})
    selector:'my-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})

export class buttonComponent {             //Exportar a classe.
    buttonText: string = 'Acessar';
    buttonNumber: number = 1;
    buttonOptions: string[] = ['Vender', 'Comprar'];
    buttonInfo = { 
        label: 'Adicionar ao Carrinho'
    };
}; // => Depois de criar a estrutura você deve criar o html desse component