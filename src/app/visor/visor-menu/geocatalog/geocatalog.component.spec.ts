import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocatalogComponent } from './geocatalog.component';

describe('GeocatalogComponent', () => {
  let component: GeocatalogComponent;
  let fixture: ComponentFixture<GeocatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeocatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeocatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
