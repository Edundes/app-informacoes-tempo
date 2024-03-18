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

}

}
