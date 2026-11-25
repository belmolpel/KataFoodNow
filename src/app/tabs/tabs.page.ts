import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, searchOutline, cartOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon name="home-outline" aria-hidden="true" />
          <ion-label>Inici</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="search" href="/search">
          <ion-icon name="search-outline" aria-hidden="true" />
          <ion-label>Cerca</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="cart" href="/cart">
          <ion-icon name="cart-outline" aria-hidden="true" />
          <ion-label>Carretó</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/profile">
          <ion-icon name="person-outline" aria-hidden="true" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
})
export class TabsPage {
  constructor() {
    addIcons({ homeOutline, searchOutline, cartOutline, personOutline });
  }
}
