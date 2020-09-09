import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayGameComponent } from './play-game/play-game.component';

const routes: Routes = [
	{
		path: '',
		component: PlayGameComponent
	}
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class PlayGameRoutingModule { }



