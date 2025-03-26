import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorMapComponent } from './visor-map.component';

describe('VisorMapComponent', () => {
  let component: VisorMapComponent;
  let fixture: ComponentFixture<VisorMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisorMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
