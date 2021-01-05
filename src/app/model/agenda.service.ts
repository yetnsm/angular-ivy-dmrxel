import { Injectable } from '@angular/core';
import { ContatosComponent } from '../contatos/contatos.component';

@Injectable({ providedIn: "root" })
export class AgendaService {
  contatos: any[];
  quantContatos: number;

  constructor() {
    this.contatos = [];
  }

  existe(email: string): boolean {
    let c
    for (c of this.obterContatos()){
      if (c[1] === email){
        return true;
      }
    }
    return false;
  }
  
  adicionar(n: HTMLInputElement , e: HTMLInputElement, t: HTMLInputElement, a: HTMLInputElement): boolean {
    if (n.value != "" && e.value != "" && t.value != "" && a.value != "") {
      if(this.validarEmail(e.value) == false) {
        alert("Insira um e-mail válido.\n "
                +"Ex.: eduardosilva@hotmail.com");
      } else if(this.validarTelefone(t.value) == false) {
        alert("Formato de telefone inválido.\n "
                +"Ex.: (84) 9 8888-8888");
      } else if(this.existe(e.value)){
        alert("E-mail já cadastrado. ");
      } else {
        let novo = [n.value, e.value, t.value, a.value]
        this.contatos.push(novo)
        this.quantContatos = this.contatos.length;
        return true;
      }
    } else {
      alert("Preencha todos os campos do formulário.");
    }
    return false;
  }

  validarEmail(email): boolean{
    var regex = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/).test(email);
    return regex;
  }

  validarTelefone(telefone): boolean{
    var regex = new RegExp(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm).test(telefone);
    return regex;
  }

  obterContatos() : string[]{
    return this.contatos;
  }

  quantidadeContatos(): number {
    return this.quantContatos;
  }

  remover(c: string[]): boolean {
    if(!this.existe(c[1])){
      alert("O contato a ser removido não existe.");
      return false;
    }
    this.contatos.splice(this.contatos.indexOf(c), 1);

    return true;
  }

  ngOnInit() {
    this.contatos = [];
    this.quantContatos = this.contatos.length;
  }
}