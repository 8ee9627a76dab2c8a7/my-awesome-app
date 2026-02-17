import { Component, signal } from '@angular/core';
import { HomeBannerDumbComponent } from './home-banner/home-banner.dumb.component';
import { FeatureCardListDumbComponent } from "./feature-card-list/feature-card-list.dumb.component";

@Component({
  selector: 'app-home',
  imports: [HomeBannerDumbComponent, FeatureCardListDumbComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
})
export class HomePageComponent {
  title = 'La productivité au XXIème siècle';
  description = "Atteignez plus d'objectif en moins de temps.";
  button = 'Terminez vos journées en héros';

  featureCardList = signal([
    {
      name: 'Planifier sa semaine',
      icon: 'bi-calendar-heart-fill',
      description: 'Visibilité sur les 7 prochains jours',
    },
    {
      name: 'Atteindre ses objectifs',
      icon: 'bi-trophy-fill',
      description: 'Priorisation des tâches',
    },
    {
      name: 'Analyser sa productivité',
      icon: 'bi-bar-chart-line-fill',
      description: 'Visualiser le travail accomplis',
    },
  ]);

  onBannerClicked(event: void): void {
    console.log('Banner clicked!');
    // TODO: Ajouter la logique de navigation ou d'action
  }
}