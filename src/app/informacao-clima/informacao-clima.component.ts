import {Component, Input} from '@angular/core';
import { ServicoClimaService, PrevisaoClima} from "../servico-clima.service";

@Component({
  selector: 'app-informacao-clima',
  standalone: true,
  imports: [],
  templateUrl: './informacao-clima.component.html',
  styleUrl: './informacao-clima.component.css'
})
export class InformacaoClimaComponent {
  // @ts-ignore
  @Input() cidadeInformada: string;
  previsaoClima: PrevisaoClima | undefined;

  constructor(private servicoClimaService: ServicoClimaService) {}

  ngOnInit() {
    this.buscaPrevisaoClima();
  }

  buscaPrevisaoClima() {
    const apiKey = '1dd0a6555a320942db378261b6ac18f2';
    this.servicoClimaService.getPrevisaoClima(this.cidadeInformada, apiKey)
      .subscribe((previsao => {
        this.previsaoClima = previsao;
      }))
  }

}
