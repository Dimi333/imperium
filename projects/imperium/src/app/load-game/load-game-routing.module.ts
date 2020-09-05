import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadGameComponent } from './load-game/load-game.component';

const routes: Routes = [
	{
		path: '',
		component: LoadGameComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadGameRoutingModule { }
