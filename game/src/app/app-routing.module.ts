import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameAreaComponent } from './game-area/game-area.component';


const routes: Routes = [
  { path: 'game-area', component: GameAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
