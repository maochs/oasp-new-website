import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeCollaborateComponent } from './how-we-collaborate.component';

describe('HowWeCollaborateComponent', () => {
  let component: HowWeCollaborateComponent;
  let fixture: ComponentFixture<HowWeCollaborateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeCollaborateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeCollaborateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
