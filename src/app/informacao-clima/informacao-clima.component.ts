import {Component, Input, OnInit} from '@angular/core';
import { ServicoClimaService} from "../servico-clima.service";
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
  clima: any;

  constructor(private servicoClimaService: ServicoClimaService) {}

  // ngOnInit() {
  //   console.log('Cidade informada:', this.cidadeInformada);
  //   this.buscaPrevisaoClima();
  // }

  buscaPrevisaoClima(): void {
    console.log("Previsão do clima buscada para a cidade de: ", this.cidadeInformada)
    this.servicoClimaService.getPrevisaoClima(this.cidadeInformada).subscribe(data => {
      this.clima = data;
    })
  }
}
