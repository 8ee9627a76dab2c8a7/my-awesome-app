import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FeatureCardlist } from './feature-card-list';

@Component({
  selector: 'app-feature-card-list',
  imports: [],
  templateUrl: './feature-card-list.dumb.component.html',
  styleUrl: './feature-card-list.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardListDumbComponent {
  readonly featureCardList = input.required<FeatureCardlist>();
}
