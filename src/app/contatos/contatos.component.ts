import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../model/agenda.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  private novoContato: string;
  private novoEmail: string;
  private novoTelefone: string;
  private novoAniversario: string;

  constructor(private as: AgendaService) {
   
    this.novoContato = "";
    this.novoEmail = "";
    this.novoTelefone = "";
    this.novoAniversario = "";
  }

  ngOnInit() {}
  
  adicionar(n: HTMLInputElement , e: HTMLInputElement, t: HTMLInputElement, a: HTMLInputElement): void {
    this.as.adicionar(n, e, t, a);
  }
}