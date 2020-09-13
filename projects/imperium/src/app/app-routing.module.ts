import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './core/templates/main-layout/main-layout.component';
import { GameLayoutComponent } from './core/templates/game-layout/game-layout.component';
import { MainGuardGuard } from './core/main-guard.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./welcome-screen/welcome-screen.module').then(m => m.WelcomeScreenModule),
		component: MainLayoutComponent
	},
	{
		path: 'new-game',
		loadChildren: () => import('./new-game/new-game.module').then(m => m.NewGameModule),
		component: MainLayoutComponent
	},
	{
		path: 'play-game',
		loadChildren: () => import('./play-game/play-game.module').then(m => m.PlayGameModule),
		component: GameLayoutComponent,
		canActivate: [MainGuardGuard]
	},
	{
		path: 'load-game',
		loadChildren: () => import('./load-game/load-game.module').then(m => m.LoadGameModule),
		component: MainLayoutComponent
	},
	{
		path: 'story',
		loadChildren: () => import('./story/story.module').then(m => m.StoryModule),
		component: MainLayoutComponent
	},
	{
		path: 'settings',
		loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
		component: MainLayoutComponent
	},
	{
		path: 'about',
		loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
		component: MainLayoutComponent
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
