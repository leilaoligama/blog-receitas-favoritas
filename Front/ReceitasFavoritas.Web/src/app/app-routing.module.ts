import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarReceitaComponent } from './Receitas/Adicionar/adicionar-receita/adicionar-receita.component';

const routes: Routes = [
  {
    path: 'adicionar-receita', component: AdicionarReceitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
