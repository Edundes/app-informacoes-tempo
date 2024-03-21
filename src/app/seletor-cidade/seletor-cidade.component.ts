import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicoClimaService} from '../servico-clima.service';
import { InformacaoClimaComponent } from '../informacao-clima/informacao-clima.component';


@Component({
  selector: 'app-seletor-cidade',
  standalone: true,
  imports: [FormsModule, InformacaoClimaComponent],
  templateUrl: './seletor-cidade.component.html',
  styleUrl: './seletor-cidade.component.css'
})
export class SeletorCidadeComponent {

cidade = '';

constructor(private servicoClimaService: ServicoClimaService) {

}

procurarCidade() {

  if (this.cidade.trim() !== '') {
 this.servicoClimaService.setCidade(this.cidade);
 console.log(this.servicoClimaService.cidade);
} else {
  console.log('Por favor, insira o nome da cidade.');
}
}

}
