import {Component, Input} from '@angular/core';
import { ServicoClimaService, PrevisaoClima} from "../servico-clima.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-informacao-clima',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './informacao-clima.component.html',
  styleUrl: './informacao-clima.component.css'
})
export class InformacaoClimaComponent {
  // @ts-ignore
  @Input() cidadeInformada: string;
  previsaoClima: PrevisaoClima | undefined;

  constructor(private servicoClimaService: ServicoClimaService) {}

  ngOnInit() {
    console.log('Cidade informada:', this.cidadeInformada);
    this.buscaPrevisaoClima();
  }

  buscaPrevisaoClima() {
    console.log('Buscando previsão do clima para:', this.cidadeInformada);
    const apiKey = '1dd0a6555a320942db378261b6ac18f2';
    this.servicoClimaService.getPrevisaoClima(this.cidadeInformada, apiKey)
      .subscribe((previsao => {
        console.log('Dados climáticos recebidos:', previsao);
        this.previsaoClima = previsao;
      }), error => {
        console.error("Erro ao buscar previsão do clima", error);
      });
    }
}
