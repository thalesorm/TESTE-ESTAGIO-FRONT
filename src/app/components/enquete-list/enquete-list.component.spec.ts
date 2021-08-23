import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteListComponent } from './enquete-list.component';

describe('EnqueteListComponent', () => {
  let component: EnqueteListComponent;
  let fixture: ComponentFixture<EnqueteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnqueteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
