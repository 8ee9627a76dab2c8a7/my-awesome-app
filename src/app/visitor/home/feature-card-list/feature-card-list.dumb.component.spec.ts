import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardListDumbComponent } from './feature-card-list.dumb.component';

describe('FeatureCardListDumbComponent', () => {
  let component: FeatureCardListDumbComponent;
  let fixture: ComponentFixture<FeatureCardListDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCardListDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCardListDumbComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
