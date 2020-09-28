import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameComponent } from './play-game/play-game.component';
import { PlayGameRoutingModule } from './play-game-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PlayGameEffects } from './effects/play-game.effects';
import { StoreModule } from '@ngrx/store';
import * as fromPlayGame from './reducers/play-game.reducer';
import { CharacterComponent } from './character/character.component';
import { MapComponent } from './map/map.component';
import { QuestsComponent } from './quests/quests.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ItemsComponent } from './items/items.component';
import { PostComponent } from './post/post.component';
import { GymComponent } from './gym/gym.component';
import { ShootingGalleryComponent } from './shooting-gallery/shooting-gallery.component';
import { ApothecaryComponent } from './apothecary/apothecary.component';
import { AlchemistComponent } from './alchemist/alchemist.component';
import { SmithComponent } from './smith/smith.component';
import { WeaponShopComponent } from './weapon-shop/weapon-shop.component';
import { FoodMarketComponent } from './food-market/food-market.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { CrematoryComponent } from './crematory/crematory.component';
import { SewerComponent } from './sewer/sewer.component';
import { OrphanageComponent } from './orphanage/orphanage.component';
import { CemeteryComponent } from './cemetery/cemetery.component';
import { PubComponent } from './pub/pub.component';
import { ShrineComponent } from './shrine/shrine.component';
import { ThamesComponent } from './thames/thames.component';
import { BridgeComponent } from './bridge/bridge.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { StablesComponent } from './stables/stables.component';
import { MarketComponent } from './market/market.component';
import { TrainStationComponent } from './train-station/train-station.component';
import { DockComponent } from './dock/dock.component';
import { HangarComponent } from './hangar/hangar.component'; 

@NgModule({
  declarations: [PlayGameComponent, CharacterComponent, MapComponent, QuestsComponent, ContactsComponent, ItemsComponent, PostComponent, GymComponent, ShootingGalleryComponent, ApothecaryComponent, AlchemistComponent, SmithComponent, WeaponShopComponent, FoodMarketComponent, LibraryComponent, HomeComponent, CrematoryComponent, SewerComponent, OrphanageComponent, CemeteryComponent, PubComponent, ShrineComponent, ThamesComponent, BridgeComponent, WarehousesComponent, StablesComponent, MarketComponent, TrainStationComponent, DockComponent, HangarComponent],
  imports: [
    CommonModule,
    PlayGameRoutingModule,
    StoreModule.forFeature(fromPlayGame.playGameFeatureKey, fromPlayGame.reducer),
    EffectsModule.forFeature([PlayGameEffects]),
  ],
  exports: [
  ]
})
export class PlayGameModule { 
	constructor() {
	}
}
