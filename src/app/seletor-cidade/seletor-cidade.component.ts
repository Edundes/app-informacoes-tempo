import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicoClimaService } from '../servico-clima.service';


@Component({
  selector: 'app-seletor-cidade',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seletor-cidade.component.html',
  styleUrl: './seletor-cidade.component.css'
})
export class SeletorCidadeComponent {

cidade = '';

constructor(private servicoClimaService: ServicoClimaService) {

}
procurarCidade() {
 // Verifica se a cidade não está vazia antes de chamar o serviço
 if (this.cidade.trim() !== '') {
  // Chama o método do serviço para buscar as informações climáticas da cidade
  this.servicoClimaService.getPrevisaoClima(this.cidade, '1dd0a6555a320942db378261b6ac18f2')
  .subscribe(previsao => {
      // Faça o que for necessário com os dados da previsão climática aqui
      console.log(previsao);
    });
} else {
  console.log('Por favor, insira o nome da cidade.');
}
}

}
