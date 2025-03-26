import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorMenuComponent } from './visor-menu.component';

describe('VisorMenuComponent', () => {
  let component: VisorMenuComponent;
  let fixture: ComponentFixture<VisorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisorMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
