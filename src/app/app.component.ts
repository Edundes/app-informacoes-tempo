import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeletorCidadeComponent } from "./seletor-cidade/seletor-cidade.component";
import { InformacaoClimaComponent } from "./informacao-clima/informacao-clima.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SeletorCidadeComponent, InformacaoClimaComponent]
})
export class AppComponent {
  title = 'painel-meterorologico';
}
