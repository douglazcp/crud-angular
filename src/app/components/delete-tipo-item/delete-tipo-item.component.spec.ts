import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipoItemComponent } from './delete-tipo-item.component';

describe('DeleteTipoItemComponent', () => {
  let component: DeleteTipoItemComponent;
  let fixture: ComponentFixture<DeleteTipoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTipoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTipoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
