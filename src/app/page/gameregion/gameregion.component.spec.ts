import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameregionComponent } from './gameregion.component';

describe('GameregionComponent', () => {
  let component: GameregionComponent;
  let fixture: ComponentFixture<GameregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameregionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
