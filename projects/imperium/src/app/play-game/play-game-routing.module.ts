import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { MapComponent } from './map/map.component';
import { QuestsComponent } from './quests/quests.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ItemsComponent } from './items/items.component';
import { PostComponent } from './post/post.component';
import { GymComponent } from './gym/gym.component';
import { ShootingGalleryComponent } from './shooting-gallery/shooting-gallery.component';
import { ApothecaryComponent } from './apothecary/apothecary.component';
import { AlchemistComponent } from './alchemist/alchemist.component';
import { SmithComponent } from './smith/smith.component';
import { WeaponShopComponent } from './weapon-shop/weapon-shop.component';
import { FoodMarketComponent } from './food-market/food-market.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { CrematoryComponent } from './crematory/crematory.component';
import { SewerComponent } from './sewer/sewer.component';
import { OrphanageComponent } from './orphanage/orphanage.component';
import { CemeteryComponent } from './cemetery/cemetery.component';
import { PubComponent } from './pub/pub.component';
import { ShrineComponent } from './shrine/shrine.component';
import { ThamesComponent } from './thames/thames.component';
import { BridgeComponent } from './bridge/bridge.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { StablesComponent } from './stables/stables.component';
import { MarketComponent } from './market/market.component';
import { TrainStationComponent } from './train-station/train-station.component';
import { DockComponent } from './dock/dock.component';
import { HangarComponent } from './hangar/hangar.component';

const routes: Routes = [	
	{
		path: 'character',
		component: CharacterComponent
	},
	{
		path: 'map',
		component: MapComponent
	},
	{
		path: 'quests',
		component: QuestsComponent
	},
	{
		path: 'contacts',
		component: ContactsComponent
	},
	{
		path: 'items',
		component: ItemsComponent
	},
	{
		path: 'post',
		component: PostComponent
	},
	{
		path: 'gym',
		component: GymComponent
	},
	{
		path: 'shooting-gallery',
		component: ShootingGalleryComponent
	},
	{
		path: 'apothecary',
		component: ApothecaryComponent
	},
	{
		path: 'alchemist',
		component: AlchemistComponent
	},
	{
		path: 'smith',
		component: SmithComponent
	},
	{
		path: 'weapon-shop',
		component: WeaponShopComponent
	},
	{
		path: 'food-market',
		component: FoodMarketComponent
	},
	{
		path: 'library',
		component: LibraryComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'crematory',
		component: CrematoryComponent
	},
	{
		path: 'sewer',
		component: SewerComponent
	},
	{
		path: 'orphanage',
		component: OrphanageComponent
	},
	{
		path: 'cemetery',
		component: CemeteryComponent
	},
	{
		path: 'pub',
		component: PubComponent
	},
	{
		path: 'shrine',
		component: ShrineComponent
	},
	{
		path: 'thames',
		component: ThamesComponent
	},
	{
		path: 'bridge',
		component: BridgeComponent
	},
	{
		path: 'warehouses',
		component: WarehousesComponent
	},
	{
		path: 'stables',
		component: StablesComponent
	},
	{
		path: 'market',
		component: MarketComponent
	},
	{
		path: 'train-station',
		component: TrainStationComponent
	},
	{
		path: 'dock',
		component: DockComponent
	},
	{
		path: 'hangar',
		component: HangarComponent
	},
	{
		path: '',
		redirectTo: 'market',
		pathMatch: 'full'
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



