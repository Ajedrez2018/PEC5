import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'cards', component: CardsComponent},
  { path: 'card/:id', component: CardComponent},
  { path: '**', component: ListComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
