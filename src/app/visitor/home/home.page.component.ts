import { Component } from '@angular/core';
import { HomeBannerDumbComponent } from './home-banner/home-banner.dumb.component';

@Component({
  selector: 'app-home',
  imports: [HomeBannerDumbComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
})
export class HomePageComponent {
  title = 'La productivité au XXIème siècle';
  description = "Atteignez plus d'objectif en moins de temps.";
  button = 'Terminez vos journées en héros';

  onBannerClicked(event: void): void {
    console.log('Banner clicked!');
    // TODO: Ajouter la logique de navigation ou d'action
  }
}