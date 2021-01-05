import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ExibeContatosComponent } from './exibe-contatos/exibe-contatos.component';
import { AgendaService } from './model/agenda.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CabecalhoComponent, ContatosComponent, ExibeContatosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AgendaService]
})
export class AppModule { }
