import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../model/agenda.service';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrls: ['./exibe-contatos.component.css']
})
export class ExibeContatosComponent implements OnInit {

  constructor(private as: AgendaService) { }
  contatos: string[];

  ngOnInit() {
    this.contatos = this.as.obterContatos();
  }

  quantidadeContatos(): number{
    return this.contatos.length;
  }

  remover(c: any): boolean {
    return this.as.remover(c);
  }
}