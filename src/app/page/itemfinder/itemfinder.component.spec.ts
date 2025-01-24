import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemfinderComponent } from './itemfinder.component';

describe('ItemfinderComponent', () => {
  let component: ItemfinderComponent;
  let fixture: ComponentFixture<ItemfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemfinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
