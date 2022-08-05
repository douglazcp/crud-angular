import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoItemDetailsComponent } from './tipo-item-details.component';

describe('TipoItemDetailsComponent', () => {
  let component: TipoItemDetailsComponent;
  let fixture: ComponentFixture<TipoItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
