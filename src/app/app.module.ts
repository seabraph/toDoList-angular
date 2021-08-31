import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TarefaComponent,
    ListaTarefasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
