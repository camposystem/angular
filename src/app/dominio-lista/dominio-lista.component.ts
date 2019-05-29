import { Component, OnInit } from '@angular/core';
import { DominioService } from '../dominio.service';

@Component({
  selector: 'app-dominio-lista',
  templateUrl: './dominio-lista.component.html',
  styleUrls: ['./dominio-lista.component.css']
})
export class DominioListaComponent implements OnInit {

  dominios: Array<any>;
  constructor(private dominioService: DominioService) { }

  ngOnInit() {
    this.obterDominio();
  }
  obterDominio(){
    this.dominioService.obterDominio().subscribe(dados => this.dominios = dados);
  }
}
