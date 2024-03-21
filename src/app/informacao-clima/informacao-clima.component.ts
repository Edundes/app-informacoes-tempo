import { Component, Input } from '@angular/core';
import { ServicoClimaService, PrevisaoClima } from '../servico-clima.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-informacao-clima',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacao-clima.component.html',
  styleUrl: './informacao-clima.component.css',
})
export class InformacaoClimaComponent {
  cidadeInformada: string = '';
  previsaoClima: PrevisaoClima | undefined;

  constructor(private servicoClimaService: ServicoClimaService) {}

  ngOnInit(): void {
    if (this.servicoClimaService.cidade) {
      console.log(this.servicoClimaService.cidade);
      this.cidadeInformada = this.servicoClimaService.cidade;
      this.getPrevisao();
    }
  }

  getPrevisao(): void {
    if (this.servicoClimaService.cidade) {
      this.servicoClimaService.getPrevisaoClima().subscribe({
        next: (data) => {
          this.previsaoClima = data;
          console.log(this.previsaoClima);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    }
  }
}
