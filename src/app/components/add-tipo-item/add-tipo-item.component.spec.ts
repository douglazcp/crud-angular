import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoItemComponent } from './add-tipo-item.component';

describe('AddTipoItemComponent', () => {
  let component: AddTipoItemComponent;
  let fixture: ComponentFixture<AddTipoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoItemComponent ]
    })
    .compileComponents();

  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(AddTipoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
